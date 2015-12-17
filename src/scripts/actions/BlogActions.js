import AppDispatcher from '../dispatcher/AppDispatcher.js';
import BlogConstants from '../constants/BlogConstants.js';
import BlogStore from '../stores/BlogStore.js';
import qs from 'querystring';

export default {

  fetch: function(){
    const req = new XMLHttpRequest();
    req.open('GET','/api/articles');
    req.responseType = 'json';
    req.onreadystatechange = function(){
      if (req.readyState !== 4 || req.status !== 200) return;

      AppDispatcher.dispatch({
        articles: req.response,
        action: BlogConstants.ARTICLE_FETCH
      });
    };
    req.send();
  },

  create: function(obj) {
    const data = qs.stringify({
      title: obj.title,
      content: obj.content,
      event: obj.event,
      weight: obj.weight,
      reps: obj.reps
    });

    const req = new XMLHttpRequest();
      req.open('POST', '/api/articles');
      req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      req.responseType = 'json';
      req.onreadystatechange = function () {
        if (req.readyState !== 4 || req.status !== 201) return;
        AppDispatcher.dispatch({
          id: req.response.id,
          time: req.response.time,
          title: obj.title,
          content: obj.content,
          event: obj.event,
          weight: obj.weight,
          reps: obj.reps,
          action: BlogConstants.ARTICLE_CREATE
        });
      };
      req.send(data);
    },

  edit: function(id,obj) {
    AppDispatcher.dispatch({
      id: id,
      title: obj.title,
      content: obj.content,
      event: obj.event,
      weight: obj.weight,
      reps: obj.reps,
      action: BlogConstants.ARTICLE_EDIT
    });
  },

  editAbout: function(obj) {
    AppDispatcher.dispatch({
      name: obj.name,
      age: obj.age,
      weight: obj.weight,
      height: obj.height,
      action: BlogConstants.ARTICLE_EDITABOUT
    });
  }
}
