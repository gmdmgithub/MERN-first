const mongoose = require('mongoose');

//db uri could be change ie https://mlab.com/ - highly recomended 
const dbURI ='mongodb://localhost:27017/library';

//connection with Promise and arrow func
mongoose.connect(dbURI, {useNewUrlParser: true})
.then(() => console.log('connected to the database ...'))
.catch((error) => console.log('connection error:',err))


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
