import React from 'react'; 
import {Link} from 'react-router-component';

const styles = {
	list:{
		display: 'flex',
		borderBottom: '2px solid #D3D3D3',
		width: '100%'
	},
	title:{
		paddingTop: '30px',
		paddingLeft: '50px',
		fontSize: '3em',
		border: 'none',
		color: '#778899',
		textDecoration:'none'

	}
}

const Articles = React.createClass({ 

  render(){ 
	return( 
 	  <div style={styles.list}>
		<Link href={"/articles/"+this.props.item.id} style={styles.title}>				
		  {this.props.item.title}
		</Link>
		<p style={{textAlign: 'right',flex:1}}>{this.props.item.time}</p>
	  </div>
	  ) 
	} 
}); 

module.exports=Articles;