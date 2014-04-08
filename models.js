
var Mongoose = require('mongoose');


var ImgSchema = new Mongoose.Schema({
	"url" : { type: String },
	"link" : { type: String },
	"hashtag" : { type: String }
});

exports.Img = Mongoose.model('Img', ImgSchema);


