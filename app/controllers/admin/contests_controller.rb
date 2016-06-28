class Admin::ContestsController < ApplicationController
  before_action :authenticate_admin!
  
  def index
    @contests = Contest.all
  end
  
  def show
    @contest = Contest.find(params[:id])
  end
  
  def new
    contest = Contest.create!
    
    redirect_to admin_contests_path
  end
  
  def destroy
    contest = Contest.find(params[:id])
    contest.destroy!
    
    redirect_to admin_contests_path
  end
end
