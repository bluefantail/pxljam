class Admin::ContestsController < ApplicationController
  layout :choose_layout
  
  def index
    @contests = Contest.all
  end
  
  def show
    @contest = Contest.find(params[:id])
  end
  
  def new
    if(params[:start_late])
      contest = Contest.create
      contest.created_at = DateTime.now
      contest.save
    else
      contest = Contest.create
      contest.created_at = DateTime.new(2016, 8, 26, 18, 0, 0, "+12").in_time_zone("UTC")
      contest.save
    end
    redirect_to admin_contests_path
  end
  
  def destroy
    contest = Contest.find(params[:id])
    contest.destroy!
    
    redirect_to admin_contests_path
  end

  private

  def choose_layout
    case action_name
    when "show"
      "time"
    else
      "admin"
    end
  end
end