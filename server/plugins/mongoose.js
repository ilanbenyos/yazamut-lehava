import mongoose from 'mongoose'
mongoose.Promise = global.Promise;
const password = 'admin';
// const mongoAtlasUrl = `mongodb://ilanben:xsw23edc@ds131721.mlab.com:31721/trippo`

const mongoAtlasUrl = `mongodb+srv://admin:${password}@cluster0-dvepl.azure.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(mongoAtlasUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('your mongoose is now connected!');
    
  });