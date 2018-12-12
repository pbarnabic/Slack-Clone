class AddColumnToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :is_url, :boolean
  end
end
