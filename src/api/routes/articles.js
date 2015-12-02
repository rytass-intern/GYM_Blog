var express = require('express');
var router = express.Router();

var articles = [];

router.get('/', function (req, res) {
  res.json(articles);
});

router.post('/', function (req, res) {
  if (!req.body.title && !req.body.content && !req.body.weight && !req.body.reps) {
    res.status(400);
    return res.json({
      message: 'Parameter Error'
    });
  }

  var articleId = Math.random();

  articles.push({
    id: articleId,
    title: req.body.title,
    content: req.body.content,
    event: req.body.event,
    weight: req.body.weight,
    reps: req.body.reps
  });

  res.status(201);
  res.json({
    id: articleId
  });
});

module.exports = router;
