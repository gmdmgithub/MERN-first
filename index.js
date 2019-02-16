const express = require('express');
require('dotenv').config();
const routes = require('./routes/api');
const app = express();
const Book = require('./models/book');

const port = process.env.PORT || 5002;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
    next();
  });


  app.use('/api', routes); 
  
  app.use((req, res, next) => {
    res.send('Express is serving content');
  });

  

  app.listen(port, () => {
    console.log(`Server running on port ${port} ...`);
  });
