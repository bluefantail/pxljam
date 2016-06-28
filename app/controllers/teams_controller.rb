class TeamsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    begin
      ActiveRecord::Base.transaction do
        team = Team.create!(name: params[:team_name])
        
        params[:players].each do |player|
          team.players.create!({
            email: player[:email],
            name: player[:player_name],
            vec: player[:vec]
          })
        end
      end
    rescue ActiveRecord::RecordInvalid => e
      render json: { success: false, message: e.message } and return
    end
    
    render json: { success: true } and return
  end
end
