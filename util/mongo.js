const mongoose = require('mongoose');

require('dotenv').config()//load data from .env file (available as process.env.XXXXXX - where XXX variable)

//db uri could be change ie https://mlab.com/ - highly recommended 


//connection with Promise and arrow func
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
.then(() => console.log('connected to the database ...'))
.catch((error) => console.log('connection error:',error))


/* old version - from mongodb home page: https://mongoosejs.com/
mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to the database ...');

});
*/
