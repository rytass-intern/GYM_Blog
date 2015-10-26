import React from 'react';
import { Router, Route, Link } from 'react-router';

// Components

// Views
import NewArticle from '../NewArticle/NewArticle.js'

const styles = {
  wrap: {
    flex: 1,
    height: '100%',
    // justifyContent: 'center'
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

// React.render((
//   <Router>
//       <Route path="NewArticle" component={NewArticle} />
//   </Router>
// ));

module.exports = Header ;
