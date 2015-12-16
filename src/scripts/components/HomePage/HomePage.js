import React from 'react';
import {Link} from 'react-router-component';

// Flux
import BlogActions from '../../actions/BlogActions';
import BlogStore from '../../stores/BlogStore';

// Components
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
  
  getInitialState(){
    return{
      articles: BlogStore.getAll()
    }
  },

  _onChange(){
    this.setState({
      articles: BlogStore.getAll()
    })
  },

  componentDidMount(){
    BlogActions.fetch()
    BlogStore.addChangeListener(this._onChange)
  },

  componentWillUnmount(){
    BlogStore.removeChangeListener(this._onChange)
  },

  render() {
    return (
        <div>
          {this.state.articles.map((item) => {
            return <Articles item={item} />
          })}
        </div>
    )
  }
});

module.exports = HomePage;
