import React from 'react';
import {Link} from 'react-router-component';

// Flux
import BlogStore from '../../stores/BlogStore';


	const DetailArticles = React.createClass({ 

		getInitialState(){
			return{
				specificArticle: BlogStore.getSpecificArticle(this.props.articleId)
			}
		},

		render(){ 
			return( 
				<div>
					<h2> ID: {this.props.articleId}</h2>
					<h2> Title: {this.state.specificArticle.title}</h2>
					<h2> Content:{this.state.specificArticle.content} </h2>
					<h2> Event:{this.state.specificArticle.event} </h2>
					<h2> Weight:{this.state.specificArticle.weight} </h2> 
					<h2> Reps:{this.state.specificArticle.reps} </h2>
					<button>
						<Link href={"/editarticle/"+ this.props.articleId}> Edit </Link>
					</button>
				</div>
			) 
		} 
	}); 

module.exports=DetailArticles;