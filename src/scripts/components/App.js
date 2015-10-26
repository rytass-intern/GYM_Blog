import React from 'react';
import {Link} from 'react-router-component';

// Components

// Views
import HomePage from './HomePage/HomePage.js';
import NewArticle from './NewArticle/NewArticle.js';

const styles = {
  wrap: {
    display: 'flex',
    height: '100%',
    width: '100%'
  }
};

const App = React.createClass({
  render() {
    return (
      <div id='site' style={styles.wrap}>
        <NewArticle />
      </div>
    )
  }
});

module.exports = App;
