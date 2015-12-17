import React from 'react';
import {Link} from 'react-router-component';

// Flux
import BlogActions from '../../actions/BlogActions';
import BlogStore from '../../stores/BlogStore';

const styles = {
  photo:{
  	paddingLeft:'400px',
  	paddingTop:'50px'
  },
  description:{
  	paddingLeft:'420px'
  }
};

const About = React.createClass({

  getInitialState(){
  	return{
  		profile: BlogStore.getProfile()
  	}
  },

  _onChange(){
    this.setState({
      profile: BlogStore.getProfile()
    })
  },

  componentDidMount(){
    BlogStore.addChangeListener(this._onChange)
  	console.log(this.state.profile)
  	console.log(this.state.profile.name)
  },

  componentWillUnmount(){
    BlogStore.removeChangeListener(this._onChange)
  },

  render(){ 
	return(
	  <div>
	  	<button>
	  		<Link href='/editabout'> Edit </Link>
	  	</button>

		<div id='photo' style={styles.photo} >
		  <img src='https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11903936_10201108146742939_6231366530833832430_n.jpg?oh=6a0f41ebe317b512d5781cc77ccc2047&oe=56E3337F'
			   style={{width:'250px', height:'250px'}} />
		</div>

	  	<div id='description' style={styles.description} >
		  <h2 style={{width:'200px', borderBottom:'1px solid', paddingBottom:'10px'}}> Name: {this.state.profile.name} </h2> 
		  <h2 style={{width:'200px', borderBottom:'1px solid', paddingBottom:'10px'}}> Age: {this.state.profile.age} </h2>
		  <h2 style={{width:'200px', borderBottom:'1px solid', paddingBottom:'10px'}}> Weight: {this.state.profile.weight} </h2>
		  <h2 style={{width:'200px', borderBottom:'1px solid', paddingBottom:'10px'}}> Height: {this.state.profile.height} </h2>
	  	</div>
	  </div>
	) 
  } 
}); 

module.exports=About;