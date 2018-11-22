class AddTypeColumnToChannelsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :is_direct_message, :boolean, null: false
  end
end
