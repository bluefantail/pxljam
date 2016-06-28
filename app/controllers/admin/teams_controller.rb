class Admin::TeamsController < ApplicationController
  before_action :authenticate_admin!
  
  def index
    @teams = Team.all
  end
  
  def show
    @team = Team.find(params[:id])
  end
  
  def destroy
    @team = Team.find(params[:id])
    @team.destroy
    
    redirect_to admin_teams_url
  end
  
  def all
    @players = Player.all
  end
  
  def verify
    @team = Team.find(params[:team_id])
    @team.verified = true
    @team.save
    
    redirect_to admin_teams_url
  end
end
