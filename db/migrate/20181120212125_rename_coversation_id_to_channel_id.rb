class RenameCoversationIdToChannelId < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :conversation_id, :channel_id
  end
end
