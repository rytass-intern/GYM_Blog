import React from 'react';
import BlogActions from '../../actions/BlogActions';

// Components
import PostForm from './PostForm.js'
import PostList from './PostList.js'

const NewArticle = React.createClass({
  render(){
    return(
      <div>
        <PostForm />
      </div>
    )
  }
});

module.exports = NewArticle;
