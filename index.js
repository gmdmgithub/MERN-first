const express = require('express');
require('dotenv').config();
require('./util/mongo');
const bookRouter = require('./routes/book_api');
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

app.use(bodyParser.json());

app.use('/api/books', bookRouter); 

app.use((req, res, next) => {
  res.json({
    message: "Go to /api/book ... to start"
  })
});

  

  app.listen(port, () => {
    console.log(`Server started on port ${port} ...`);
  });
