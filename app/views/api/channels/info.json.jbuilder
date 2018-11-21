json.users do
  @memberships.each do |member|
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end

json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end
