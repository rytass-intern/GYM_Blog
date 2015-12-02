import React from 'react';
import { Router, Route, Link } from 'react-router';

// Flux
import BlogActions from '../../actions/BlogActions';
import BlogStore from '../../stores/BlogStore';

const PostForm = React.createClass({

  getInitialState(){
    var state = {
      title:'',
      content:'',
      event:'',
      weight:'',
      reps:''
    };
    return state;
  },

  componentDidMount(){
    BlogStore.addChangeListener(this.articleUpdate);
  },

  componentWillUnmount(){
    BlogStore.removeChangeListener(this.articleUpdate);
  },

  articleUpdate(){
    this.setState({
      title:'',
      content:'',
      event:'',
      weight:'',
      reps:''
    });
  },

  _onTitleChange(e){
    this.setState({
      title:e.target.value
    });
  },

  _onContentChange(e){
    this.setState({
      content:e.target.value
    });
  },

  _onEventChange(e){
    this.setState({
      event:e.target.value
    });
  },

  _onWeightChange(e){
    this.setState({
      weight:e.target.value
    });
  },

  _onRepsChange(e){
    this.setState({
      reps:e.target.value
    });
  },

  _onSubmit(){
    var obj = {
      title: this.state.title,
      content: this.state.content,
      event: this.state.event,
      weight: this.state.weight,
      reps: this.state.reps
    }
    BlogActions.create(obj);

      this.setState({
        title:'',
        content:'',
        event:'',
        weight:'',
        reps:''
      });
  },

  render(){
    return(
      <div>
        <input type='text' placeholder='Title' onChange={this._onTitleChange} value={this.state.title} />
        <input type='text' placeholder='Content' onChange={this._onContentChange} value={this.state.content} />
        
        <select onChange={this._onEventChange} value={this.state.event}>
           <option value=" "></option>
　         <option value="仰臥起坐">仰臥起坐</option>
　         <option value="伏地挺身">伏地挺身</option>
           <option value="啞鈴">啞鈴</option>
        </select>
        
        <input type='text' placeholder='Weight' onChange={this._onWeightChange} value={this.state.weight} />
        <input type='text' placeholder='Reps' onChange={this._onRepsChange} value={this.state.reps} />
        <button type='button' onClick={this._onSubmit}> Submit </button>
      </div>
    )
  }
});

module.exports = PostForm;
