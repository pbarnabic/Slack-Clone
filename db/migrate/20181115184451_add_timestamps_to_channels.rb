class AddTimestampsToChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :created_at, :datetime, null: false
    add_column :channels, :updated_at, :datetime, null: false
  end
end
