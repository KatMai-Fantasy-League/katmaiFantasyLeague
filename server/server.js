const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();


const app = express();
const PORT = 3000;
app.use(express.json());
var dir = path.join(__dirname, 'client');

// serve static assets
app.use(express.static(dir));

//serve index.html file
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

//routers
const apiRouter = require('./routes/api');
const loginRouter = require('./routes/loginRoute'); 

app.use('/api', apiRouter);
app.use('/login', loginRouter); 

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

module.exports =  app;
