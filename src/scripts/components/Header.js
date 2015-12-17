import React from 'react';
import {Link} from 'react-router-component';

// Components

// Views

const styles = {
  wrap: {
    height:'15%',
    backgroundColor:'#DDDDDD'
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

          <button type='button' style={{backgroundColor:'#DDDDDD', border:'none', paddingRight:'15px'}}>
            <Link href='/newarticle' style={{color:'#778899', fontSize:'1.5em', textDecoration:'none'}}>New Article</Link>
          </button>

          <button type='button' style={{backgroundColor:'#778899', border:'none'}}>
            <Link href='/signin' style={{color:'#FFFFFF', fontSize:'1.5em', textDecoration:'none'}}> Sign In </Link>
          </button>

        </div>
        <p style={{paddingLeft:'15px', fontSize:'2em', fontFamily:'courier', color:'#A9A9A9'}}> ALL ARTICLES </p>

      </div>
    )
  }
});

module.exports = Header ;
