class AddVerificationToTeam < ActiveRecord::Migration
  def change
    add_column :teams, :verified, :boolean
  end
end
