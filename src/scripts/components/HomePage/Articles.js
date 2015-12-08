import React from 'react'; 

	const Articles = React.createClass({ 
		render(){ 
			return( 
				<div>
					<h1> {this.props.item.id} </h1>
					<h2> Title:{this.props.item.title} </h2>
					<p> Content:{this.props.item.content} </p>
					<p> Event:{this.props.item.event} </p>
					<p> Weight:{this.props.item.weight} </p> 
					<p> Reps:{this.props.item.reps} </p> 
				</div>
			) 
		} 
	}); 

module.exports=Articles;