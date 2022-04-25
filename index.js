const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connetction = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');
// View engine
app.set('view engine', 'ejs');

//Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database
connetction
	.authenticate()
	.then(() => {
		console.log('Conexão feita com sucesso!');
	})
	.catch((error) => {
		console.log(error);
	});

//Satic
app.use(express.static('public'));

app.use('/', categoriesController);
app.use('/', articlesController);

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(8080, () => {
	console.log('🚀  Servidor rodando! | http://localhost:8080/');
});
