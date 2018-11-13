class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :email_address, null: false
      t.string :session_token, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.timestamps
    end
    
    add_index :users, :username
    add_index :users, :password_digest
    add_index :users, :email_address
    add_index :users, :session_token
  end
end
