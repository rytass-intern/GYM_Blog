import React from 'react';
import { Router, Route, Link } from 'react-router';
import BlogActions from '../../actions/BlogActions';
import BlogStore from '../../stores/BlogStore';

const PostForm = React.createClass({

  getInitialState(){
     return {content: ''}
  },

  _onSubmit(){
    BlogActions.create(this.state.content)
    this.setState({
      content: ''
    })
  },

  _onChange(e){
    this.setState({
      content: e.target.value
    })
  },

  render(){
    return(
      <div>
        <form>
          <textarea onChange={this._onChange} placeholder='content...' value={this.state.content}></textarea>
          <button type='submit' onSubmit={this._onSubmit}>Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = PostForm;
