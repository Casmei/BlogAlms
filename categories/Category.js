const Sequelize = require('sequelize');
const connetction = require('../database/database');

const Category = connetction.define('categories', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	slug: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = Category;
