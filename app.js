var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(express.static(__dirname+'/client'));

app.use(bodyParser.json())

//Genre = require('./models/genre');
Content = require('./models/content');

mongoose.connect('mongodb://localhost/practive3');
var db = mongoose.connection;

app.get('/',function(req, res){
	res.send('Please use /api/contents or hi /api');
});

// lay danh sach contents
app.get('/api/contents', function(req, res){
	Content.getContents(function(err, contents){
		if(err){
			throw err;
		}
		res.json(contents);
	});

});




//them contents
app.post('/api/contents', (req, res) => {
	var content = req.body;
	Content.addContent(content, (err, book) => {
		if(err){
			throw err;
		}
		res.json(content);
	});
});
//Update book
app.put('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});


//xoa book

app.delete('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	Book.removeBook(id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});


app.listen(3000);
console.log('Running on port 3000....');