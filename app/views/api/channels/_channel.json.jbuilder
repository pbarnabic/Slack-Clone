json.extract! channel, :id, :admin_id, :channel_name, :is_direct_message
json.userIds channel.users.ids
