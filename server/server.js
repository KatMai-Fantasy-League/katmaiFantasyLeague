const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session'); 
const PORT = 3000;

// app.set('view engine', 'ejs'); 

// app.use(session({
//   resave: false,
//   saveUninitialized: true,
//   secret: 'SECRET' 
// }));

// app.get('/', function(req, res) {
//   res.render('pages/auth');
// });

// /*  PASSPORT SETUP  */
// const passport = require('passport');
// let userProfile;

// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/success', (req, res) => res.send(userProfile));
// app.get('/error', (req, res) => res.send("error logging in"));

// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

// /*  Google AUTH  */
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const GOOGLE_CLIENT_ID = '599848243160-fh9f74vresv83v5g9oec13q73vnq1mnv.apps.googleusercontent.com';
// const GOOGLE_CLIENT_SECRET = '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';
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//       userProfile=profile;
//       return done(null, userProfile);
//   }
// ));
 
// app.get('/auth/google', 
//   passport.authenticate('google', { scope : ['profile', 'email'] }));
 
// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/error' }),
//   function(req, res) {
//     // Successful authentication, redirect success.
//     res.redirect('/success');
//   });



//serve index.html file
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

//routers
const myBracketRouter = require('./routes/myBracketRoute');
const resultsBracketRouter = require('./routes/resultBracketRoute'); 

app.use('/myBracket', myBracketRouter);
app.use('/resultsBracket', resultsBracketRouter);

//unknown route handler
app.use('*', (req, res) => {
  return res.sendStatus(404);
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = { app, router };
