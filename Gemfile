source 'https://rubygems.org'
# source 'https://ruby.taobao.org/'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.0.1'
# Use sqlite3 as the database for Active Record
gem 'sqlite3', '~> 1.3.6'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5'
# Use Uglifier as compressor for JavaScript assets
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

gem 'jquery-rails'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'capistrano'
  gem 'capistrano-rails'
  gem 'capistrano-rbenv'
  gem 'capistrano-passenger'
  gem 'capistrano-bundler'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'mina'
end

group :production do
  gem 'pg'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'highline'
gem 'slackistrano'
gem 'devise'

gem "responders", "~> 2.4.1"