# == Schema Information
#
# Table name: channels
#
#  id                :bigint(8)        not null, primary key
#  channel_name      :string           not null
#  admin_id          :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  is_direct_message :boolean          not null
#

class Channel < ApplicationRecord
  validates :channel_name, presence: true
  validates :admin_id, presence: true

  has_many :memberships,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: :ChannelMembership

  has_many :users,
    through: :memberships,
    source: :users

  belongs_to :administrator,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :User

  has_many :messages,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: :Message


end
