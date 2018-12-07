json.message do
  @resultingMessages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end

json.authors do
  @resultingAuthors.each do |author|
    json.set! author.id do
      json.extract! author, :id, :username, :email_address, :first_name, :last_name
    end
  end
end
