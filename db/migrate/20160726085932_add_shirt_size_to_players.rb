class AddShirtSizeToPlayers < ActiveRecord::Migration
  def change
    add_column :players, :shirt_size, :string
  end
end
