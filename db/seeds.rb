# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demoUser1 = User.create(username: "demoUser", password: "password", email_address: "demoUser@slack.com", first_name: "Demo", last_name: "User")


# :username, :password,:email_address,:session_token,:first_name,:last_name)

# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null -X
#  password_digest :string           not null -X
#  email_address   :string           not null -X
#  session_token   :string           not null -X
#  first_name      :string           not null -X
#  last_name       :string           not null -X
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
