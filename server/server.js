const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

//imported controllers
const loginControllers = require('../server/controllers/loginControllers');

//serve index.html file
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

//routers
const myBracketRouter = require('../server/routes/myBracketRoute');
const resultsBracketRouter = require('../server/routes/resultBracketRoute'); 

//SIGN UP/LOGIN Routes 
app.post('/signup', loginControllers.createUser, (req, res) => {
  console.log('WE HAVE ENTERED SIGN UP ROUTE HANDLER');
  return res.status(200);  //redirect to login
});

// this is the endpoint for logging in
app.post('/login', loginControllers.verifyUser, loginControllers.createToken, (req, res) => {
  console.log('ENTERED LOGIN ROUTE HANDLER');
  return res.status(200); //redirect to homepage
});

// this is a template for authentication on any of our homepage routes 
app.get('/afterLogin', loginControllers.checkForToken, loginControllers.verifyToken, (req, res) => {
  console.log('ENTERED AFTER LOGIN ROUTE HANDLER');
  res.status(200);
});

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

module.exports = app;
