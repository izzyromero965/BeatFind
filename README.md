# BeatFind

---- Welcome to BeatFind! A clone of Flickr (https://Flickr.com)! Currently a work in progress. -----

<img src="/BeatfindScreenTrue.png">

Here is a link to the live site: https://beatfind.herokuapp.com/

BeatFind is a clone of Flickr with CRUD operations for images and albums. Most of these features are only available when logged into the site, you can create an account and try it yourself at https://beatfind.herokuapp.com/signup

Database Schema: https://github.com/snakedreamz/BeatFind/wiki/Database-Schema

Current and future MVPs: https://github.com/snakedreamz/BeatFind/wiki/MVP-Feauture-List

---- Tech-Stack: ----

Javascript

node.js

Sequelize

Express.js

React JS

Redux


---- Want to contribute to BeatFind? or try it out locally? Beatfind requires Postgres. ----

Clone our repo with the command: `git clone https://github.com/snakedreamz/BeatFind.git`

CD into the frontend and backend directories and install dependencies with the command: `npm install`

Create a .env file with from the .env.example in the backend directory of the project.

Create a user in Postgres with the username and password set in your .env file, with CREATEDB.

Create the database by running the command: `npx dotenv sequelize db:create`

Migrate the database by running the command: `npx dotenv sequelize db:migrate`

Seed the database by running the command: `npx dotenv sequelize db:seed:all`

You can start the servers by running `npm start` in your console in both the frontend and backend directories. Happy coding!

---- Future Features for Beatfind: ----

search for images, comment on images, follow people and be able to see their albums, apply tags and select favorites.
