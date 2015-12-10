import React from 'react';
import {Locations, Location, NotFound} from 'react-router-component';

// Flux
import BlogActions from '../actions/BlogActions';
import BlogStore from '../stores/BlogStore';

// Components
import SideMenu from './SideMenu.js';
import Header from './Header.js';

// Views
import HomePage from './HomePage/HomePage.js';
import Articles from './HomePage/Articles.js';
import DetailArticles from './HomePage/DetailArticles.js';
import NewArticle from './NewArticle/NewArticle.js';
import EditArticle from './EditArticle/EditArticle.js';
import About from './About/About.js';

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

  getInitialState(){
    return{
      articles: BlogStore.getAll()
    }
  },

  render() {
    var id = this.state.articles.id
    return (
      <div id='site' style={styles.wrap}>
        <SideMenu />
        <div id='header&location' style={styles.main}>
          <Header />
          <Locations path={this.props.path}>
              <Location handler={HomePage} path='/' />
                <Location handler={DetailArticles} path={'/'+id} />
              <Location handler={About} path='/about' />
              <Location handler={NewArticle} path='/newarticle' />
              <Location handler={EditArticle} path='/editarticle' />
              <NotFound handler={HomePage} />
          </Locations>
        </div>
      </div>
    )
  }
});

module.exports = App;
