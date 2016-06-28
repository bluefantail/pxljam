class PageController < ApplicationController
  def index
  	@teams = Team.verified
    @contest_running = Contest.any?
  end
end
