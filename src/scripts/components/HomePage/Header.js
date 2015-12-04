import React from 'react';
import {Link} from 'react-router-component';

// Components

// Views
import NewArticle from '../NewArticle/NewArticle.js'

const styles = {
  wrap: {
    height: '15%',
    backgroundColor: '#DDDDDD'
  },
  headerButton:{
    textAlign:'right'
  }
};

const Header = React.createClass({

  render() {
    return (
      <div id='Header' style={styles.wrap}>
        <div id='headerbutton' style={styles.headerButton}>

          <button type='button' style={{
            color:'#FFFFFF',
            fontSize:'1em',
            backgroundColor: '#DDDDDD',
            border: 'none',
            paddingRight:'15px'}}>
            <Link href='/newarticle'>New Article</Link>
          </button>

          <button type='button' style={{
            color:'#FFFFFF',
            fontSize:'1em',
            backgroundColor: '#DDDDDD',
            border: 'none',
            paddingRight:'15px'}}>
            <Link href='/editarticle'>Edit Article</Link>
          </button>

          <button type='button' style={{
            color:'#FFFFFF',
            fontSize:'1em',
            backgroundColor: '#5599FF',
            border: 'none'}}> Sign In </button>

        </div>
        <p style={{
          paddingLeft:'15px',
          fontSize:'2em',
          fontFamily:'courier',
          color:'#696969'}}> ALL ARTICLES </p>

      </div>
    )
  }
});

module.exports = Header ;
