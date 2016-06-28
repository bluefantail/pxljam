class Team < ActiveRecord::Base
  validates_uniqueness_of :name, message: "Sorry, but that team name is already taken"
  
  has_many :players, dependent: :destroy
  
  scope :verified, -> { where(Team.arel_table[:verified].eq(true)) }
end
