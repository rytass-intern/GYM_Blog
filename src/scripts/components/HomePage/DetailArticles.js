import React from 'react';
import {Link} from 'react-router-component'; 

	const DetailArticles = React.createClass({ 
		render(){ 
			return( 
				<div>
					<h2> Title:{this.props.item.title} </h2>
					<p> Content:{this.props.item.content} </p>
					<p> Event:{this.props.item.event} </p>
					<p> Weight:{this.props.item.weight} </p> 
					<p> Reps:{this.props.item.reps} </p> 
				</div>
			) 
		} 
	}); 

module.exports=DetailArticles;