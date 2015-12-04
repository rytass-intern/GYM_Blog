import React from 'react';
import {Link} from 'react-router-component';

const styles = {
  sideBar: {
    height: '100%',
    width: '20%',
    backgroundColor: '#666666'
  },
  webFont:{
    textAlign:'center',
    fontSize:'3em',
    fontFamily:'courier',
    color:'#FFFFFF'
  },
  webButton:{
    textAlign:'left',
    color: '#CCDDFF',
    backgroundColor: '#666666',
    border: 'none',
    fontSize:'1.2em'
  },
  SideBarArticleButton:{
    fontSize:'1.5em',
    paddingTop:'50px',
    color: '#A9A9A9',
    backgroundColor: '#666666',
    border: 'none'
  }
};

const SideMenu = React.createClass({

  render(){
    return (
      <div id='sideBar' style={styles.sideBar}>
        
        <p style={styles.webFont}> WEBSITE </p>
        
        <div style={styles.webButton}>
          
          <button type='button' style={{
            color:'#CCDDFF',
            fontSize:'1em',
            backgroundColor: '#666666',
            border: 'none'
          }}>
            <Link href='/'>Blog</Link>
          </button>
          
          <button type='button' style={{
            color:'#CCDDFF',
            fontSize:'1em',
            backgroundColor: '#666666',
            border: 'none'
          }}> About </button>
        </div>
        
        <div>

          <button type='button' style={styles.SideBarArticleButton}> RECENTLY <br/> POST </button>
            <ul>
              <li> first post </li>
              <li> second post </li>
            </ul>
        </div>

        <div>
          <button type='button' style={styles.SideBarArticleButton}> ALL <br/> ARTICELS </button>
            <ul>
              <li> first post </li>
              <li> second post </li>
              <li> third post </li>
            </ul>
        </div>

      </div>
    )
  }
});

module.exports = SideMenu;
