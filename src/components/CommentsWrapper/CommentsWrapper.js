import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import { withRouter } from 'react-router-dom';


class CommentsWrapper extends Component {
	constructor(props){
		super(props);
		this.state = {
			comments : []
		}
	}
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then( response => response.json() )
			.then( data => this.setState( {comments : data} ) )
	}
	render(){
		
		const { comments } = this.state;
		const { username } = this.props.location.name;
		const { id } = this.props.location.nameid;

		return(
			<div>
			
				<h1>Comments by {username} :  </h1>
				{comments &&
				comments.map((prop, index) => (
					<Comment {...prop} key={prop.id} idUser={id} />
				))


				}
				
			</div>

		)
	}
}
export default CommentsWrapper;

