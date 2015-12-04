import React from 'react';
import {Locations, Location, NotFound} from 'react-router-component';

// Components

// Views
import HomePage from './HomePage/HomePage.js';
import SideMenu from './HomePage/SideMenu.js';
import Header from './HomePage/Header.js';
import NewArticle from './NewArticle/NewArticle.js';
import EditArticle from './EditArticle/EditArticle.js';

const styles = {
  wrap: {
    display: 'flex',
    height: '100%',
    width: '100%'
  },
  main:{
    height: '100%',
    width: '100%'
  }
};

const App = React.createClass({
  render() {
    return (
      <div id='site' style={styles.wrap}>
        <SideMenu />
        <div id='header&location' style={styles.main}>
          <Header />
          <Locations path={this.props.path}>
              <Location handler={NewArticle} path='/' />
              <Location handler={EditArticle} path='/editarticle' />
              <NotFound handler={NewArticle} />
          </Locations>
        </div>
      </div>
    )
  }
});

module.exports = App;
