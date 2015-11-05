import React from 'react';
import { Router, Route, Link } from 'react-router';

// Flux
import BlogActions from '../../actions/BlogActions';
import BlogStore from '../../stores/BlogStore';

const PostForm = React.createClass({

  getInitialState(){
    return{
      content:''
    }
  },

  componentDidMount(){
    BlogStore.addChangeListener(this.articleUpdate);
  },

  componentWillUnmount(){
    BlogStore.removeChangeListener(this.articleUpdate);
  },

  articleUpdate(){
    this.setState({
      content:''
    });
  },
  _onChange(e){
    this.setState({
      content: e.target.value
    });
  },
  _onSubmit(){
    BlogActions.create(this.state.content);
      this.setState({
        content:''
      });
  },

  render(){
    return(
      <div>
        <input type='text' onChange={this._onChange} value={this.state.content} />
        <button type='button' onClick={this._onSubmit}> Submit! </button>
      </div>
    )
  }
});

module.exports = PostForm;
