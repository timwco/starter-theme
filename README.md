## Simple WordPress Starter Theme

#### Includes

- Vagrant setup - [see here](https://box.scotch.io) for more details
- SASS
- Browserify (ES2015)

#### Instructions

- Start [here](https://box.scotch.io)
- Clone this repo
- Run `vagrant up`
  - The first time it will take a few minutes to update.
  - You also might want to check the version of the Vagrant setup
  - Once it downloads and runs, you can view your site locally at - [http://192.168.33.10/](http://192.168.33.10/)
- Navigate to `/public/wp-content/themes/starter` and build
  - In here you can use `gulp start` to watch `scss` and `js` (browserify) changes
  - _Note: If you change the folder name, update your `.gitignore` file

#### Deploy

The point of this is just to build a theme. Once the theme is built locally, you can set up any deploy strategy that you want. Most likely though, you'll just be deploying the theme and not the entire repo.