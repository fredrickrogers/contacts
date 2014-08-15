var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	firstname: String,
	lastname: String,
	street1: String,
	street2: String,
	city: String,
	state: String,
	zip: String,
	phone: String,
	email: String,
	notes: String
});

module.exports = mongoose.model('Contact', ContactSchema);