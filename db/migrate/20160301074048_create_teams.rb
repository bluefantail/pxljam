class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.text :name, null: false
      t.timestamps null: false
    end
  end
end
