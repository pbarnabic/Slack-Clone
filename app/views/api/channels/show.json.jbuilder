json.channel do
  json.partial! '/api/channels/channel', channel: @channel
end
