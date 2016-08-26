class TimerController < ApplicationController
  def index
    @contest = Contest.all.last
    if @contest
      render "admin/contests/show" and return
    end
  end
end
