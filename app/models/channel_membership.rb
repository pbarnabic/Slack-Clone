# == Schema Information
#
# Table name: channel_memberships
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#

class ChannelMembership < ApplicationRecord
  validates :user_id,:channel_id, presence: true

  belongs_to :users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :channels,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: :Channel

end
