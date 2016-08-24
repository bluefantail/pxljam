module ApplicationHelper
	def active?(check)
    	return 'active' if current_page?(check)
    	''
  	end
end
