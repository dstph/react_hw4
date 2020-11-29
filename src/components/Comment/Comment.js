import React, { Component } from 'react';

class Comment extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { userId, id, tittle, body, idUser} = this.props;
		return(
			<div>
				{userId == idUser &&
					<div>
						<h3>{tittle}</h3>
						<p>{body}</p>
					</div>
				}
			</div>
		)
	}
}

export default Comment;