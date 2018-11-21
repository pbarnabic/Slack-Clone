# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  body       :text
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MessageSerializer < ActiveModel::Serializer
  attributes :id, :channel_id, :body, :created_at, :user_id
end
