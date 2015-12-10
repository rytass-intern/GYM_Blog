import React from 'react'; 
import {Link} from 'react-router-component';

const Articles = React.createClass({ 
  render(){ 
	return( 
 	  <div>
		<Link href={this.props.item.id}>				
		  <h2> {this.props.item.title} </h2>
		</Link>
	  </div>
	  ) 
	} 
}); 

module.exports=Articles;