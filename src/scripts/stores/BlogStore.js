import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {EventEmitter} from 'events';
import BlogConstants from '../constants/BlogConstants.js';
import assign from 'object-assign';

// Server Side Hotfix
const localStorage = localStorage || {};

const CHANGE_EVENT = 'change';

let _profiles = [];
let _articles = [];

const BlogStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    return this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(listener) {
    return this.removeListener(CHANGE_EVENT, listener);
  },

  getAll() {
    return _articles;
  },

  getSpecificArticle(id) {
    return _articles[id-1];
  },

  getProfile(){
    return _profiles;
    console.log(_profiles);
  }
});

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action) {
    case BlogConstants.ARTICLE_FETCH:
          _articles = payload.articles;

          BlogStore.emitChange();
          break;

    case BlogConstants.ARTICLE_CREATE:
          _articles.push({
            id: payload.id,
            time: payload.time,
            title: payload.title,
            content: payload.content,
            event: payload.event,
            weight: payload.weight,
            reps: payload.reps
          });

          BlogStore.emitChange();
          break;

      case BlogConstants.ARTICLE_EDIT:
          _articles[payload.id-1] = {
            id: payload.id,
            title: payload.title,
            content: payload.content,
            event: payload.event,
            weight: payload.weight,
            reps: payload.reps
          };
          
          BlogStore.emitChange();
          break;

      case BlogConstants.ARTICLE_EDITABOUT:
          _profiles[0] = {
            name: payload.name,
            age: payload.age,
            weight: payload.weight,
            height: payload.height
          };
          BlogStore.emitChange();
          break;

  return true;
  }
});

export default BlogStore;
