import React, { Component } from 'react';
import Comment from '../Comment/Comment';



class CommentsWrapper extends Component {
	constructor(props){
		super(props);
		this.state = {
			comments : null,
			userId : props.match.params.id
		}
	}
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then( response => response.json() )
			.then( data => this.setState( {comments : data} ) )
	}
	render(){
		
		const { comments } = this.state;
		
		return(
			<div>
			
				<h1>Comments by : </h1>
				{comments !== null &&
				comments.map((prop, index) => (
					<Comment {...prop} key={prop.id} />
				))


				}
				
			</div>

		)
	}
}
export default CommentsWrapper;

