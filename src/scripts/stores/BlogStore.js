import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {EventEmitter} from 'events';
import BlogConstants from '../constants/BlogConstants.js';
import assign from 'object-assign';

// Server Side Hotfix
const localStorage = localStorage || {};

const CHANGE_EVENT = 'change';

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
            content: payload.content
          });

          BlogStore.emitChange();
          break;

  return true;
}
});

export default BlogStore;
