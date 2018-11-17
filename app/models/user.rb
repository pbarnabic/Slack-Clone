# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  email_address   :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :email_address, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :username, :email_address, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token

  has_many :admin_channels,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :Channel

  has_many :channel_memberships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ChannelMembership

  has_many :channels,
    through: :channel_memberships,
    source: :channels


  def ensure_session_token
    self.session_token ||= User.new_session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    generate_session_token
    save!
    self.session_token
  end

  def self.new_session_token
    SecureRandom::urlsafe_base64
  end

  def generate_session_token
    self.session_token = User.new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = User.new_session_token
    end
    self.session_token
  end

  def self.find_by_credentials(email_address,password)
    @user = User.find_by(email_address: email_address)

    if @user && @user.is_password?(password)
      @user
    else
      nil
    end
  end


end
