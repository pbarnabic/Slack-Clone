# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ChannelMembership.destroy_all
Channel.destroy_all
User.destroy_all
Message.destroy_all

demoUser1 = User.create(username: "DemoUser", password: "password", email_address: "demoUser@slack.com", first_name: "Demo", last_name: "User")
demoUser2 = User.create(username: "Paul B.", password: "password", email_address: "demoUser2@slack.com", first_name: "Paul", last_name: "Barnabic")

channel1 = Channel.create(channel_name: "App Academy", admin_id: demoUser1.id, is_direct_message: false);
channel2 = Channel.create(channel_name: "Job Hunters", admin_id: demoUser2.id, is_direct_message: false);
channel3 = Channel.create(channel_name: "General", admin_id: demoUser2.id, is_direct_message: false);


channelMembership1 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel1.id)
channelMembership2 = ChannelMembership.create(user_id: demoUser2.id, channel_id: channel1.id)
channelMembership3 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel2.id)
channelMembership4 = ChannelMembership.create(user_id: demoUser2.id, channel_id: channel2.id)
channelMembership5 = ChannelMembership.create(user_id: demoUser2.id, channel_id: channel3.id)


message1 = Message.create(user_id: demoUser2.id, channel_id: channel1.id, body: "Welcome! This is where we will discuss all things App Academy. Feel free to post questions about code you are having trouble with, questions about the program, or anything else.")
message2 = Message.create(user_id: demoUser2.id, channel_id: channel2.id, body: "Hey, all! This is a channel for members of the App Academy community that are currently seeking employment. Feel free to ask questions pertaining to your resume, application processes, or anything else you feel may be relevant to your fellow job seekers.")


dm1 = Channel.create(channel_name: "DemoUser, Paul B.", admin_id: demoUser2.id, is_direct_message: true);



dmMembership1 = ChannelMembership.create(user_id: demoUser1.id, channel_id: dm1.id)
dmMembership2 = ChannelMembership.create(user_id: demoUser2.id, channel_id: dm1.id)
