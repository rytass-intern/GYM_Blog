var express = require('express');
var router = express.Router();

var articles = [];

router.get('/', function (req, res) {
  res.json(articles);
});

router.post('/', function (req, res) {
  if (!req.body.content) {
    res.status(400);
    return res.json({
      message: 'Parameter Error'
    });
  }

  var articleId = Math.random();

  articles.push({
    id: articleId,
    content: req.body.content
  });

  res.status(201);
  res.json({
    id: articleId
  });
});

module.exports = router;
