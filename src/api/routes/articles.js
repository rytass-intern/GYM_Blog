var express = require('express');
var router = express.Router();

var articles = [
  { id: 1,
    title: 'Day 1',
    content: '好累唷',
    event: '啞鈴',
    weight: '15',
    reps: '4'},
  { id:2,
    title: 'Day 2',
    content: '好辛苦唷',
    event: '仰臥起坐',
    weight: '20',
    reps: '5'}  
  ];

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
