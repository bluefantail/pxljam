class AddVerificationToTeam < ActiveRecord::Migration
  def change
    add_column :teams, :verified, :bool
  end
end
