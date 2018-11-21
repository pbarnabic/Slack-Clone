class RenameColumnInMessage < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :channel_id, :conversation_id
  end
end
