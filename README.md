# Pxljam
A Rails website for the PxlJam game jam. 

# Installation

Make sure you have a working version of Ruby installed, with the Bundler gem.

Clone Pxljam and navigate to the folder:

```
git clone https://github.com/bluefantail/pxljam.git
cd pxljam
```

Install dependencies using bundler:

```
$ bundle install
```

Rails, and all the project dependencies will now be installed.

# Database Migrations

Run the database migrations:

```
$ bin/rake db:migrate
```

After everything is installed, and database migrations have been run, do:

```
$ bin/rails s
```

Pxljam will be available at http://localhost:3000


# Editing Content

Content for the various site sections are in the following partials:

About: [_about.html.erb](app/views/page/_about.html.erb)

Enter: [_enter.html.erb](app/views/page/_enter.html.erb)

FAQ: [_faq.html.erb](app/views/page/_faq.html.erb)

Where: [_where.html.erb](app/views/page/_where.html.erb)

Contact: [_contact.html.erb](app/views/page/_contact.html.erb)