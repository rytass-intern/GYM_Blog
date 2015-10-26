import React from 'react';
import { Router, Route, Link } from 'react-router';
import BlogActions from '../../actions/BlogActions';

// Components
import PostForm from './PostForm.js'
import PostList from './PostList.js'

const NewArticle = React.createClass({
  render(){
    return(
      <div>
        <PostForm />
        <PostList />
      </div>
    )
  }
});

module.exports = NewArticle;
