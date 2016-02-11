# express-login-example

This is a user authentication demonstration web app build with ExpressJS and MongoDB. It is modified for my personal favor and heavily borrowed from [passport-local-express4](https://github.com/mjhea0/passport-local-express4).

In this simple web app provided:

1. Login / Logout

2. Registering a user account


The original tutorial check out the blog post [User Authentication With Passport and Express 4](http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/).


The working example is running on [https://express-login.herokuapp.com/](https://express-login.herokuapp.com/)

# Development

First, modify `config/default.json.example` to `config/default.json` and edit host, port and dbName for your mongodb.

```
npm run dev
```

Note: In development mode `nodemon` will automatically restart the server.

# Production

Environment variables `DB_HOST`, `DB_PORT` and `DB_NAME` must be set.

```
DB_HOST='111.222.121.212' DB_PORT=7788 DB_NAME='users' npm start
```
