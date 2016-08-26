class AddGotShirtToPlayer < ActiveRecord::Migration
  def change
    add_column :players, :got_shirt, :boolean, default: false
  end
end
