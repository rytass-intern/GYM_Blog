var express = require('express');
var router = express.Router();
var _ = require('lodash');

var articles = [
  { id: 1,
    title: 'Day 1',
    content: '好累唷',
    event: '啞鈴',
    weight: '15',
    reps: '4'},
  { id: 2,
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

  var articleId = articles.length + 1;
  var createTime = new Date();

  articles.push({
    id: articleId,
    time: createTime,
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

router.patch('/:articleId', function(req, res){
  if(req.params.articleId){
    var id = parseInt(req.params.articleId)
 
    articles[id] = {
      title: req.body.title,
      content: req.body.content,
      event: req.body.event,
      weight: req.body.weight,
      reps: req.body.reps
    };
    res.status(204);
    res.end();
  }else{
    res.status(404);
    res.end();
  }
});



module.exports = router;
