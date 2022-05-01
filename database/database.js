const Sequelize = require('sequelize');

const connetction = new Sequelize('blog_alms', 'root', '123456', {
	host: 'localhost',
	dialect: 'mysql',
	port: 3307,
  timezone: '-03:00'
});

module.exports = connetction;
