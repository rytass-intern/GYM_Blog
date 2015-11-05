import React from 'react'; 

	const PostItem = React.createClass({ 
		render(){ 
			return( <p> {this.props.item.content} </p> 
			) 
		} 
	}); 

module.exports=PostItem;

