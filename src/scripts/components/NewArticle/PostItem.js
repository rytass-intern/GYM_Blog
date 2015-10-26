import React from 'react';

// Components

const PostItem = React.createClass({
  render(){
    return(
    	<div>
    		<p>articles={this.prop.articles}</p>
    	</div>
    )
  }
});

module.exports=PostItem;
