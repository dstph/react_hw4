import React, { Component } from 'react';
import CommentsWrapper from '../CommentsWrapper/CommentsWrapper';
import UserWrapper from '../UserWrapper/UserWrapper';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Navigation extends Component{
	render(){
		const { location } = this.props;
		return(
			<>
				<Switch>
					<Route exact path='/' component={UserWrapper} />
					<Route path={location.pathname} render={ props => <CommentsWrapper {...props} /> } />
				</Switch>
			</>
		)
	}
}

export default Navigation;
