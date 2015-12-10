import React from 'react';
import {Link} from 'react-router-component';

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
  render(){ 
	return(
	  <div>
		<div id='photo' style={styles.photo} >
		  <img src='https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11903936_10201108146742939_6231366530833832430_n.jpg?oh=6a0f41ebe317b512d5781cc77ccc2047&oe=56E3337F'
			   style={{width:'250px', height:'250px'}} />
		</div>

	  	<div id='description' style={styles.description} >
		  <h2 style={{width:'200px', borderBottom:'1px solid', paddingBottom:'10px'}}> Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;田韻杰 </h2> 
		  <h2 style={{width:'200px', borderBottom:'1px solid', paddingBottom:'10px'}}> &nbsp;&nbsp;&nbsp;&nbsp;Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20 </h2>
		  <h2 style={{width:'200px', borderBottom:'1px solid', paddingBottom:'10px'}}> Weight:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45 Kg </h2>
		  <h2 style={{width:'200px', borderBottom:'1px solid', paddingBottom:'10px'}}> Height:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;156 cm </h2>
	  	</div>
	  </div>
	) 
  } 
}); 

module.exports=About;