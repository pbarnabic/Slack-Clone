class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :channel_name, null: false
      t.integer :admin_id, null: false
    end
    add_index :channels, :channel_name
    add_index :channels, :admin_id
  end
end
