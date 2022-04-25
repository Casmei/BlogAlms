const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connetction = require('./database/database');

// View engine
app.set('view engine', 'ejs');

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
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

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(8080, () => {
	console.log('🚀  Servidor rodando! | http://localhost:8080/');
});
