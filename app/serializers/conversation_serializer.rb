# == Schema Information
#
# Table name: conversations
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :channel_id, :name
  has_many :messages
end
