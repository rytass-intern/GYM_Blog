import React from 'react';
import { Router, Route, Link } from 'react-router';
import BlogActions from '../../actions/BlogActions';

const PostForm = React.createClass({

  getInitialState(){
      content: ''
  },

  componentDidMount(){
    BlogStore.addChangeListener(this._onSubmit)
  },

  componentWillUnmount(){
    BlogStore.removeChangeListener(this._onSubmit)
  },

  _onSubmit(){
    BlogStore.create(this.state.content)
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
        <form onSubmit={this._onSubmit}>
          <textarea onChange={this._onChange} placeholder='content...' value={this.state.content}></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = PostForm;
