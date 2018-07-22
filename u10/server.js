var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var model = require('./model.js');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/photos/:page', function(req, res){

	model.Photo.findAndCountAll({
		offset:(req.params.page-1)*50,
		limit:50
	}).then(result =>{
		res.render('gallery',{imgArr:result, pageNumber:req.params.page});
	});
});

app.route('/singleView/:id').get(function(req, res){
	model.Photo.findById(req.params.id, {include : [model.Comment]})
	.then(result =>{
		res.render('singleViewComments',{img:result});
	});
}).post(function(req, res){

	model.sequelize.sync().then(() => model.Comment.create({
		content: req.body.comment
	}).then(result =>{
		model.Photo.findById(req.params.id, {include : [model.Comment]})
		.then(imageWithId =>{
			imageWithId.addComment(result);
			res.redirect(req.originalUrl);
		});	
	})
	);
	

});
// 50 Fotos ab :offset zurückgeben

// GET: /photos/:page

// GET/POST: /singleView/:id

app.listen(8080, function(){
	console.log('server running...');
});
