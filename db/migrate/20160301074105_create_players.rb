class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.text :email, null: false
      t.boolean :vec, null: false, default: false
      t.timestamps null: false
    end
  end
end
