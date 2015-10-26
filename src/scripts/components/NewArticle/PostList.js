import React from 'react';
import BlogActions from '../../actions/BlogActions';
import BlogStore from '../../stores/BlogStore';

// Components
import PostItem from './PostItem';

const PostList = React.createClass({

getInitialState(){
	articles: BlogStore.getAll()
},

_onChange(){
	this.setState({articles: BlogStore.getAll()})
},

componentDidMount(){
	BlogActions.fetch()
	BlogStore.addChangeListener(this._onChange)
},

componentWillUnmount(){
	BlogStore.removeChangeListener(this._onChange)
},
	  
  render(){
    return(
    	<div>
    		{this.state.articles.map((item) => {
    			return <PostItem articles={this.state.articles} />
			})}
  		</div>
    )
  }
});

module.exports = PostList;