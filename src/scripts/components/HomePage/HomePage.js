import React from 'react';

// Components
import SideMenu from './SideMenu.js';
import Header from './Header.js';
import Articles from './Articles.js';

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
};

const HomePage = React.createClass({
  render() {
    return (
        <div>
            <SideMenu />
            <Header />
        </div>
    )
  }
});

module.exports = HomePage;
