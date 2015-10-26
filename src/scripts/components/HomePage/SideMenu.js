import React from 'react';

const styles = {
  wrap: {
    height: '100%',
    width: '450 px',
    backgroundColor: '#F8F8FF'
  }
};

const SideMenu = React.createClass({

  render(){
    return (
      <div style={styles.wrap}>
            <button type='button'> WEBSITE </button>
      <div>
        <button type='button'> Blog </button>
        <button type='button'> About </button>
      </div>
      <div>
      <button type='button'> RECENTLY POST </button>
      <ul>
        <li> first post </li>
        <li> second post </li>
      </ul>
      </div>
      <div>
      <button type='button'> ALL ARTICELS </button>
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
