import React from 'react';
import {Link} from 'react-router-component';

// Flux
import BlogActions from '../../actions/BlogActions';
import BlogStore from '../../stores/BlogStore';

const styles = {
  input: {
    padding:'10px',
    marginLeft:'50px'
  }
};

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
      <div id='inputs' style={styles.input}>
        <div>
          <p style={{fontSize:'1.8em', color:'#708090'}}> Title </p>
          <input type='text' onChange={this._onTitleChange} value={this.state.title} style={{width:'800px', height:'40px', fontSize:'1.5em', borderRadius:'5px', border:'1px solid #708090', backgroundColor:'#F8F8FF'}} />
        </div>

        <div>
          <p style={{fontSize:'1.8em', color:'#708090'}}> Content </p>
          <input type='text' onChange={this._onContentChange} value={this.state.content} style={{width:'800px', height:'300px', fontSize:'1.5em', borderRadius:'5px', border:'1px solid #708090', backgroundColor:'#F8F8FF'}} />
        </div>

        <div>
          <p style={{fontSize:'1.8em', color:'#708090'}}> Event </p>
          <select onChange={this._onEventChange} value={this.state.event} style={{width:'800px', height:'40px', fontSize:'1.5em', borderRadius:'5px', border:'1px solid #708090', backgroundColor:'#F8F8FF'}}>
  　         <option value="仰臥起坐">仰臥起坐</option>
  　         <option value="伏地挺身">伏地挺身</option>
             <option value="啞鈴">啞鈴</option>
          </select>
        </div>

        <div>
          <p style={{fontSize:'1.8em', color:'#708090'}}> Weight </p>
          <input type='text' onChange={this._onWeightChange} value={this.state.weight} style={{width:'200px', height:'40px', fontSize:'1.5em', borderRadius:'5px', border:'1px solid #708090', backgroundColor:'#F8F8FF'}} />
        </div>

        <div>
          <p style={{fontSize:'1.8em', color:'#708090'}}> Reps </p>
          <input type='text'  onChange={this._onRepsChange} value={this.state.reps} style={{width:'200px', height:'40px', fontSize:'1.5em', borderRadius:'5px', border:'1px solid #708090', backgroundColor:'#F8F8FF'}} />
        </div>

        <button type='button' onClick={this._onSubmit} style={{marginTop:'30px', backgroundColor:'#708090', borderRadius:'10px'}}>
          <Link href='/' style={{color:'#FFFFFF', textDecoration:'none', fontSize:'2em'}}> Submit </Link>
         </button>
      </div>
    )
  }
});

module.exports = PostForm;
