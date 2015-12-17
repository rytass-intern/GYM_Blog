import React from 'react';
import {Link} from 'react-router-component';

// Flux
import BlogStore from '../../stores/BlogStore';
import BlogActions from '../../actions/BlogActions';

const styles = {
  input: {
    padding:'10px',
    marginLeft:'50px'
  }
};

const EditAbout = React.createClass({

	getInitialState(){
		var editProfile = BlogStore.getProfile();

		return{	
			name: editProfile.title,
			age: editProfile.content,
			weight: editProfile.event,
      height: editProfile.weight,
		}
	},	

  	_onNameChange(e){
    	this.setState({
      	name:e.target.value
    	});
  	},

  	_onAgeChange(e){
    	this.setState({
      	age:e.target.value
    	});
  	},

  	_onWeightChange(e){
    	this.setState({
      	weight:e.target.value
    	});
  	},

  	_onHeightChange(e){
    	this.setState({
      	height:e.target.value
    	});
  	},

  	_onSubmit(){
    	var obj = {
      	name: this.state.name,
      	age: this.state.age,
    		weight: this.state.weight,
    		height: this.state.height,
    	}
    	BlogActions.editAbout(obj);
  	},

  render(){
    return(
      <div id='inputs' style={styles.input}>
        <div>
          <p style={{fontSize:'1.8em', color:'#708090'}}> Name </p>
          <input type='text' onChange={this._onNameChange} value={this.state.name} style={{width:'800px', height:'40px', fontSize:'1.5em', borderRadius:'5px', border:'1px solid #708090', backgroundColor:'#F8F8FF'}} />
        </div>

        <div>
          <p style={{fontSize:'1.8em', color:'#708090'}}> Age </p>
          <input type='text' onChange={this._onAgeChange} value={this.state.age} style={{width:'800px', height:'40px', fontSize:'1.5em', borderRadius:'5px', border:'1px solid #708090', backgroundColor:'#F8F8FF'}} />
        </div>

        <div>
          <p style={{fontSize:'1.8em', color:'#708090'}}> Weight </p>
          <input type='text' onChange={this._onWeightChange} value={this.state.weight} style={{width:'800px', height:'40px', fontSize:'1.5em', borderRadius:'5px', border:'1px solid #708090', backgroundColor:'#F8F8FF'}} />
        </div>

        <div>
          <p style={{fontSize:'1.8em', color:'#708090'}}> Height </p>
          <input type='text' onChange={this._onHeightChange} value={this.state.height} style={{width:'800px', height:'40px', fontSize:'1.5em', borderRadius:'5px', border:'1px solid #708090', backgroundColor:'#F8F8FF'}} />
        </div>

        <button type='button' onClick={this._onSubmit} style={{marginTop:'30px', backgroundColor:'#708090', borderRadius:'10px'}}>
          <Link href="/about" style={{color:'#FFFFFF', textDecoration:'none', fontSize:'2em'}}> Submit </Link>
        </button>
      </div>
    )
  }
});

module.exports = EditAbout ;
