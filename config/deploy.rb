# config valid only for current version of Capistrano
lock '3.5.0'

set :application, 'pxljam'
set :repo_url, 'git@github.com:bluefantail/pxljam.git'

set :passenger_roles, :app

# Default branch is :master
set :branch, `git rev-parse --abbrev-ref HEAD`.chomp
set :tmp_dir, "/tmp/#{`whoami`.split('\\').first.chomp}"

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/apps/pxljam'

# Default value for :linked_files is []
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

set :slack_webhook, 'https://hooks.slack.com/services/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'
set :slack_team, "golden-eagle"
set :slack_channel, '#pxljm'

after 'deploy:publishing', 'deploy:restart'
