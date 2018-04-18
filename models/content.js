var mongoose = require('mongoose');
// Genre Schema
var contentSchema = mongoose.Schema({
	topic:{
		type: String,
		required: true
	},
	user_say:{
		type: String,
		
	},
	answer:{
		type: String,
		required: true
	},
	lang:{
		type: String,
		required: true
	},
	updatetime:{
		type: Date,
		default: Date.now
	}
	
});
var Content = module.exports = mongoose.model('Content', contentSchema);

//get Books
module.exports.getContents = function(callback,limit){
	Content.find(callback).limit(limit);
}
module.exports.addContent = (content, callback) => {
	Content.create(content, callback);
}

module.exports.updateContent = (id, content, options, callback) => {
	var query = {_id: id};
	var update = {
		topic: content.topic,
		user_say: content.user_say,
		answer: content.answer,
		lang: content.lang
	}
	Content.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeContent = function(id,callback){
	var query = {_id: id};
	Content.remove(query,callback);
}




/* //get Book theo id
module.exports.getBookById = function(id,callback){
	Book.findById(id, callback);
}
//add Book
module.exports.addBook = (book, callback) => {
	Book.create(book, callback);
}
//update book
module.exports.updateBook = (id, book, options, callback) => {
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}
//xoa book
module.exports.removeBook = function(id,callback){
	var query = {_id: id};
	Book.remove(query,callback);
} */