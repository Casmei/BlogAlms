const express = require('express');
const { default: slugify } = require('slugify');
const router = express.Router();
const Category = require('../categories/Category')
const Article = require('./Article')

router.get('/admin/articles', (req, res) => {
	res.send('ROTA DE ARTIGS');
});

router.get('/admin/articles/new', (req, res) => {
  Category.findAll().then(categories => {
    res.render('admin/articles/new', {categories: categories});
  })
});

router.post('/articles/save', (res,req) => {
  let title = req.body.title;
  let body = req.body.body;
  let category = req.body.category;

  Article.create({
    title: title,
    slug: slugify(title),
    body: body,
    categoryId: category
  }).then(() => {
    res.redirect('/admin/articles')
  })
})

module.exports = router;
