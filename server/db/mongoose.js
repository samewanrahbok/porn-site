var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1/public-porn-db');
mongoose.connect('mongodb+srv://uptimer:uptimer@cluster0.jrfih.mongodb.net/');

module.exports = {mongoose};
