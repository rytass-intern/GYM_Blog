import React from 'react';
import BlogActions from '../../actions/BlogActions';
import BlogStore from '../../stores/BlogStore';

// Components
import PostItem from './PostItem';

const PostList = React.createClass({

getInitialState(){
	return {articles: BlogStore.getAll()}
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
    			return <PostItem item={item} />
			})}
  		</div>
    )
  }
});

module.exports = PostList;