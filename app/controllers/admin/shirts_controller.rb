class Admin::ShirtsController < ApplicationController
  before_action :authenticate_admin!

  layout "admin" 

  def index
    @players = Player.all.order(:created_at)
  end

  def give
    player = Player.find(params[:shirt_id])
    player.got_shirt = true
    player.save!
    redirect_to action: :index
  end

  def ungive
    player = Player.find(params[:shirt_id])
    player.got_shirt = false
    player.save!
    redirect_to action: :index
  end
end
