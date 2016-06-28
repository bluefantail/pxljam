class AddFoodToPlayer < ActiveRecord::Migration
  def change
    add_column :players, :food, :boolean, default: true
  end
end
