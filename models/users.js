var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
		name:String,
		passwd:String
});

mongoose.model('User', UserSchema);
