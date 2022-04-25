const Sequelize = require('sequelize');
const connetction = require('../database/database');

const Article = connetction.define('categories', {
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

module.exports = Article;
