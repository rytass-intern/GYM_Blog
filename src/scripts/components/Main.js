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
import SignIn from './SignIn/SignIn.js';
import Articles from './HomePage/Articles.js';
import DetailArticles from './HomePage/DetailArticles.js';
import NewArticle from './NewArticle/NewArticle.js';
import EditArticle from './EditArticle/EditArticle.js';
import About from './About/About.js';
import EditAbout from './About/EditAbout.js';


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

const Main = React.createClass({

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
          <Locations contextual path={this.props.path}>
              <Location handler={HomePage} path='/' />
              <Location handler={DetailArticles} path="/articles/:articleId" />
              <Location handler={About} path='/about' />
              <Location handler={EditAbout} path='/editabout' />
              <Location handler={NewArticle} path='/newarticle' />
              <Location handler={EditArticle} path='/editarticle/:articleId' />
              <NotFound handler={HomePage} />
          </Locations>
        </div>
      </div>      
    )
  }
});

module.exports = Main;
