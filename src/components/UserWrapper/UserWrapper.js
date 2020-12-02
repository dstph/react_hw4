import React, { Component } from 'react';
import User from '../User/User';

class UserWrapper extends Component{
	constructor(props) {
		super(props);
		this.state = {
			userItems : null,
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then( response => response.json() )
			.then( data => this.setState( {userItems : data} ) );
	}

	render(){
		const { userItems } = this.state;
		return(
				
				<>
				{userItems  &&
				userItems.map((props, index) => (
				 	<div>
						<User {...props} key={props.email}  />
						
					</div>
				))}
				</>
			
		)
	}
}

export default UserWrapper;