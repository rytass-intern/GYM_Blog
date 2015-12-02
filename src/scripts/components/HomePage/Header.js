import React from 'react';
import { Router, Route, Link } from 'react-router';

// Components

// Views
import NewArticle from '../NewArticle/NewArticle.js'

const styles = {
  wrap: {
    flex: 1,
    height: '100%',
  }
};

const Header = React.createClass({

  render() {
    return (
      <div>
        <button type='button'> Sign In </button>
        <button type='button'>
          <Link to="/NewArticle">NewPost</Link>
        </button>
        <p> ALL ARTICLES </p>
      </div>
    )
  }
});

module.exports = Header ;
