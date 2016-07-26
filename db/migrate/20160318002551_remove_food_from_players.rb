class RemoveFoodFromPlayers < ActiveRecord::Migration
  def change
    remove_column :players, :vec
  end
end
