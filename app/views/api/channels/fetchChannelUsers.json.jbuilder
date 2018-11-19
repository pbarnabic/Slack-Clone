@memberships.each do |member|
  json.set! member.id do
    json.partial! 'api/users/user', user: member
  end
end
