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

class Conversation < ApplicationRecord

  belongs_to :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: :Channel

  has_many :messages,
    primary_key: :id,
    foreign_key: :conversation_id,
    class_name: :Message

end
