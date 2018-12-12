# Welcome to Slack Clone!

Slack Clone is a full-stack emulation of the popular professional messaging service, slack™, and is built through the employment of Rails, React, and Redux.

## Overview

The following will be covered in depth:

* Routes
* Channels
* Messages
* Direct Messages
* Search

## Routes

Before, delving into messages and channels. Let's go over the Routes.

Located in *app.jsx*, the App component utilizes the ```Switch``` component twice. The switch component ensures the first route matching the url is show and more importantly, only that route is shown. The first use of the ```Switch``` component is shown below.

```
<Switch>
      <Route exact path="/" component={GreetingContainer} />
      <Route exact path="/messages" component={MainPageContainer} />
      <Route exact path="/messages/:id" component={MessagePageContainer}/>
</Switch>
```
In the above, the route with the path *'/'* takes the user to the homepage. The homepage is inaccessible once the user has logged in.

The next route, that with path *'/messages'* takes the user to a page resembling that of a traditional slack messaging page, however, it has a button in the center of it that allows the user to join a channel. This page is solely viewed by new users who have not yet joined a channel. Although, it should be noted that all users are directed through this page upon logging in. However, if the user belongs to channels, they are automatically redirected to that channel, located at *'/messages/:id'*, which is what the third route is for.

The third route contained within this switch component is for viewing a channel or direct message. It should be noted that channels and direct messages are treated the same when it comes to routing.

As was mentioned previously, *app.jsx* makes use of two ```Switch``` components. The second of which is utilized for auth.

```
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>    
```

Having discussed ```AuthRoute``` already, we will leave our discussion of routing here.

## Channels

Channels are a major part of this slack clone. A user cannot send or receive messages without being a part of a channel.

To join a channel, a new user clicks on the green *Join a Channel!* button located in the center of the messages page. This reveals a Channels modal. An exisitng user reveals this same modal through clicking on *Channels* in the left hand side bar.

It should be noted that this modal is similar to any other component found in this application, however it is always on the page. To prevent this modal from always being shown, its CSS className is dependent upon the modals slice of state, as are DM and Search Modals. A sample slice of state is shown below.

```
modals:
  recentSearchModal: "hidden-recent-search-modal"
  searchResultsModal: "hidden-search-results-modal"
  show: "hidden-modal"
  showDM: "hidden-dm-modal"
```
Note that *show* refers to the channels modal. Having gross underestimated the number of modals I would be using in this project. I thought show would be enough and never went back to change it later.

When *show* has the value of *hidden-modal*, this CSS class has property display none resulting in its absence from the user's screen. However, when the state is modified such that *show* has *visible-modal* as its value, the user sees the modal. All of the modals used in this program work this way.

When a user selects a channel to join from the channels modal, an ajax request is issued to *'/api/channel_memberships'*. In the Channels Memberships controller, a new channel membership is created and if sucessfully inserted into the database, the channel the user now belongs to is sent back as JSON. Upon receiving this JSON response, the JSON is parsed for the channel id and the user is redirected to the appropriate page. Moreover, the state is modified to account for the channel and its pertinent information.

The channels slice of state is found under entities and contains information pertaining to who the admin is, what the channel name is, and and what users are members (these members' ids are stored in an array).

When a user wishes to create a new channel, an ajax post request is made to *'/api/channels'*, and the following actions occur.

A new channel instance is created using the params provided in the data portion of the ajax request, a channel membership is created for the current user, and upon successful insertion of the channel into the database, the channel is sent back as JSON.

On the frontend, a user joining a channel and a user creating a channel is handled the same when it comes to receiving the channel back.

## Messages

When a user is a part of a channel, it is essential that they are capable of receivng and sending channels. To enable instantaneous messaging, Rails' Action Cable is utilized. Action Cable was a major part of the release of Rails 5 and enables the use of Web Sockets. Web sockets are a full duplex protocol, meaning that information can be sent both ways at the same time in the simplest terms. This differs from HTTP in that one request does not need to complete for another to begin, thereby offering a continuous flow of information.

When a user joins a channel, they become subscribed to the Messages Channel located in the Rails backend. To ensure they are subscribed to the appropriate channel, thereby ensuring they do not receive messages they shouldn't, their subscription also involves the passing of a channel Id.

```
  <ActionCable
          key={this.props.channel.id}
          channel = {{channel: 'MessagesChannel',conversation: this.props.channel.id}}
          onReceived ={res => {this.props.receiveMessage(res)}}
/>
```
The above can be found in *Messages.jsx*, and shows how this subscription is established. Note that the key is irrelevant in the above, it is for React's diffing purposes. Ignoring the key, the Action Cable component involves two parts, *channel* and *onReceived*. The *channel* portion handles what was discussed earlier. It subscribes the page to the channel *MessagesChannel* and provides information pertianing to which conversation the channel the user is currently in is concerned with.

The code pertaining to the Messages Channel can be found in *app/channels/messages_channel.rb*. In it you will see a class, *Messages Channel*, with two instance methods. For my purposes, I only used subscribed, but it should be known that both are automatically generated when the command ```rails g channel MessagesChannel``` is used in the terminal, hence the second's presence. In the ```subscribed``` method, the appropriate channel is found using Active Record's find method and the id provided under the key of *conversation* that was defined when the user subcribed via the Action Cable Component. Once that channel is found, it is then streamed.

```
class MessagesChannel < ApplicationCable::Channel
  def subscribed
    conversation = Channel.find(params[:conversation])
    stream_for conversation
  end
end
```

Notice, up until this point we have only discussed how the front end listens for messages. The creation of messages is handled sligthly differently.

When a user submits a message via the input bar found on the Messages Page, *messages_page.jsx*, an ajax post request is made to *'api/messages'*. In the Messages Controller, the create method creates a message instance as it would with any other class, however, rather than rendering JSON back, it does the following.

```
if @message.save
     data = render :show
     MessagesChannel.broadcast_to channel, data
     head :ok
end
```
Note that the channel was found using an id sent up with the AJAX request.

What is happening here? Upon the message successfully saving, its JSON representation is assigned to a local variable of name *data*. Then MessagesChannel broadcasts to all of the users that belong to the channel the message is a part of the data. Because all users are subscribed to the channel via the Action Cable component, the previously mentioned prop, *onReceived*, of the Action Cable receieves this JSON representation of the message and adds it to the messages slice of state. Once the state now accounts for this new message, the page automatically rerenders having updated and displays the message to all subscribers.

For more information pertaining to Action Cable, I reccomend the following readings and video which were of great use to me.

https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296
https://medium.com/@benpong89/action-cable-and-react-9a00be5e391b
https://www.youtube.com/watch?v=n0WUjGkDFS0

## Direct Messages

Direct Messages at their core are channels. Although they use a different controller, *direct_messages_controller.rb* this controller creates a Channel instance and persists it into the database. Where they differ is the fact their memberships are defined upon their creation and are immutable.

In simply creating a Direct Message to a user in the application, it should be pretty apparent how the process works but some key points are summed up as follows.

* The current user, upon launching the DMs Modal, selects the users they want to message. The list of potential recipients is a list of all users in all channels the current user is a part of apart from themself. Once selected, the ids of these users are sent up in the AJAX request.

* In the Direct Messages Controller, the channel instance is created and given the name of all the users' names that are part of the direct message. Once the instance has been persisted into the database. Channel Memberships are created for all of the users whose id's were sent up as part of the AJAX request. Note, that the current user's id was not sent up however is accessed by using the current_user method provided by the Application Controller.

Another way in which direct messages differ from channels is how their successful creation is handled. Rather than simply rendering a JSON view for the channel, it is imperative that all users know that they have been added to a new Direct Message and consequently their screen updates to reflect this change. But how do we allow the user to know that they must update their list of direct messages? Action Cable saves the day once again.

The implementation of Action Cable for the purposes of ensuring users know they have been added to a new DM differs very slightly from the implementation of Action Cable for messages. Rather than using *MessagesChannel*, users are subscribed to a *ChatsChannel* instead. Rather than using the channel id for identifying which users to stream for, the DM recipients' user ids are used in their place.

What this means for the Direct Messages Controller is that upon the successful creation and insertion of Channel Memberships to the new Direct Message, the data pertaining to this new DM is sent back via the broadcast method of the *ChatsChannel*, as shown below.

```
if channel_membership.save

  #here is where we will broadcast

  data = render :show

  @users.each do |user|
    ChatsChannel.broadcast_to user, data
    head :ok
  end

  #Don't want to forget the current user

  ChatsChannel.broadcast_to current_user, data
  head :ok

```
Note that ```@users``` was created from the array of user ids sent up with the initial AJAX post request and consequently did not include the current user. To ensure they too receive the Direct Message and their screen updates accordingly, we must broadcast to them the data pertaining to the creation of the existence of a new Direct Message as well.

## Search

The last topic to discuss is search. Search might not work as you might expect. When a user is viewing a particular channel, only the messages that belong to that channel are part of the messages slice of state. Consequently, it is impossible to search all messages a user has received without either loading all of the messages into state or making an ajax request to the server. I consequently elected to go with the latter option. Upon a search query being submitted, an AJAX request is issued to the 'api/messages/search' and there a has-many-through association that is part of the User model is used to fetch all messages a user has ever sent or received in any given channel. This accomplished in a single query to the PostgreSQL database. From this list, messages are selected depending on whether or not they contain the query string. The messages that contian the string are then sent back along with their corresponding channel ids. These ids will be used if the user selects the message to consequently bring them to the appropriate channel.

I appreciate you taking the time to review my work. For any questions feel free to reach me at ptbarnabic@gmail.com . For more information about who I am, check out https://pbarnabic.github.io/.
