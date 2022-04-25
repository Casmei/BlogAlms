const Sequelize = require('sequelize');
const connetction = require('../database/database');
const Category = require('../categories/Category');

const Article = connetction.define('articles', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	slug: {
		type: Sequelize.STRING,
		allowNull: false
	},
	body: {
		type: Sequelize.TEXT,
		allowNull: false
	}
});

//Relacionamento
Category.hasMany(Article); //1-ns
Article.belongsTo(Category); //1-1

module.exports = Article;
