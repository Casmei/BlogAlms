const Sequelize = require('sequelize');

const connetction = new Sequelize('blog_alms', 'root', '123456', {
	host: 'localhost',
	dialect: 'mysql',
	port: 3307
});

module.exports = connetction;
