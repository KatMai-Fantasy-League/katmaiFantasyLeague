const path = require('path');


// Database imports
const db = require("./models/pgWrapper");
const tokenDB = require("./models/tokenModel")(db);
const userDB = require("./models/userModel")(db);

// OAuth imports
const oAuthService = require("./auth/tokenService")(userDB, tokenDB);
const oAuth2Server = require("node-oauth2-server");

const express = require('express');

const app = express();
app.oauth = oAuth2Server({
    model: oAuthService,
    grants: ["password"],
    debug: true,
});
const testAPIService = require("./test/testAPIService.js");
const testAPIRoutes = require("./test/testAPIRoutes.js")(
    express.Router(),
    app,
    testAPIService
);
const authenticator = require("./auth/authenticator")(userDB);
const routes = require("./auth/routes")(
    express.Router(),
    app,
    authenticator
);

const PORT = 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(app.oauth.errorHandler());
app.use("/auth", routes);
app.use("/test", testAPIRoutes);

//imported controllers
const loginControllers = require('./controllers/loginControllers');

//serve index.html file
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

//routers
const myBracketRouter = require('./routes/myBracketRoute');
const resultsBracketRouter = require('./routes/resultBracketRoute'); 

// //SIGN UP/LOGIN Routes 
// app.post('/signup', loginControllers.createUser, (req, res) => {
//   console.log('WE HAVE ENTERED SIGN UP ROUTE HANDLER');
//   return res.status(200);  //redirect to login
// });

// // this is the endpoint for logging in
// app.post('/login', loginControllers.verifyUser, loginControllers.createToken, (req, res) => {
//   console.log('ENTERED LOGIN ROUTE HANDLER');
//   return res.status(200); //redirect to homepage
// });

// // this is a template for authentication on any of our homepage routes 
// app.get('/afterLogin', loginControllers.checkForToken, loginControllers.verifyToken, (req, res) => {
//   console.log('ENTERED AFTER LOGIN ROUTE HANDLER');
//   res.status(200);
// });

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
