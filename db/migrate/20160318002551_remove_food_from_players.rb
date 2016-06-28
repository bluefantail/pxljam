class RemoveFoodFromPlayers < ActiveRecord::Migration
  def change
    remove_column :players, :food
  end
end
