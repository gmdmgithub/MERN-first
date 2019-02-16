const express = require('express');
require('dotenv').config();
const routes = require('./routes/api');
const bodyParser = require('body-parser');

const app = express();


const port = process.env.PORT || 5002;


//Middleware (use)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
    next();
  });


  app.use('/api', routes); 
  
  app.use((req, res, next) => {
    res.json({
      message: "Go to /api/book ... to start"
    })
  });

  

  app.listen(port, () => {
    console.log(`Server running on port ${port} ...`);
  });
