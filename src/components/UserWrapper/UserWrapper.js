import React, { Component } from 'react';
import User from '../User/User';
import CommentsWrapper from '../CommentsWrapper/CommentsWrapper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


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
			<React.Fragment>
	
				{userItems !==null &&
				userItems.map((props, index) => (
				 	<div>
						<User {...props} key={props.email? props.email : index}  />
						
					</div>
				))}


			</React.Fragment>
		)
	}
}

export default UserWrapper;