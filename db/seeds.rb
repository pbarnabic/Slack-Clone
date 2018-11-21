# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demoUser1 = User.create(username: "demoUser", password: "password", email_address: "demoUser@slack.com", first_name: "Demo", last_name: "User")

channel1 = Channel.create(channel_name: "App Academy", admin_id: demoUser1.id)
channel2 = Channel.create(channel_name: "Flatiron Bootcamp", admin_id: demoUser1.id)
channel3 = Channel.create(channel_name: "Flatiron Bootcamp1", admin_id: demoUser1.id)
channel4 = Channel.create(channel_name: "Flatiron Bootcamp2", admin_id: demoUser1.id)
channel5 = Channel.create(channel_name: "Flatiron Bootcamp3", admin_id: demoUser1.id)
channel6 = Channel.create(channel_name: "Flatiron Bootcamp4", admin_id: demoUser1.id)
channel7 = Channel.create(channel_name: "Flatiron Bootcamp5", admin_id: demoUser1.id)
channel8 = Channel.create(channel_name: "Flatiron Bootcamp6", admin_id: demoUser1.id)
channel9 = Channel.create(channel_name: "Flatiron Bootcamp7", admin_id: demoUser1.id)
channel10 = Channel.create(channel_name: "Flatiron Bootcamp8", admin_id: demoUser1.id)
channel11 = Channel.create(channel_name: "Flatiron Bootcamp9", admin_id: demoUser1.id)

channelMembership1 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel1.id)
channelMembership2 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel2.id)
channelMembership3 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel3.id)
channelMembership4 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel4.id)
channelMembership5 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel5.id)
channelMembership6 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel6.id)
channelMembership7 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel7.id)
channelMembership8 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel8.id)
channelMembership9 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel9.id)
channelMembership10 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel10.id)
channelMembership11 = ChannelMembership.create(user_id: demoUser1.id, channel_id: channel11.id)

message1 = Message.create(user_id: demoUser1.id, channel_id: channel1.id, body: "Hello 1")
message2 = Message.create(user_id: demoUser1.id, channel_id: channel2.id, body: "Hello 2")
message3 = Message.create(user_id: demoUser1.id, channel_id: channel3.id, body: "Hello 3")
message4 = Message.create(user_id: demoUser1.id, channel_id: channel4.id, body: "Hello 4")
message5 = Message.create(user_id: demoUser1.id, channel_id: channel5.id, body: "Hello 5")
message6 = Message.create(user_id: demoUser1.id, channel_id: channel6.id, body: "Hello 6")
message7 = Message.create(user_id: demoUser1.id, channel_id: channel7.id, body: "Hello 7")
message8 = Message.create(user_id: demoUser1.id, channel_id: channel8.id, body: "Hello 8")
message9 = Message.create(user_id: demoUser1.id, channel_id: channel9.id, body: "Hello 9")
message10 = Message.create(user_id: demoUser1.id, channel_id: channel10.id, body: "Hello 10")
message11 = Message.create(user_id: demoUser1.id, channel_id: channel11.id, body: "Hello 11")
