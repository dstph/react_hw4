import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


class User extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {id, name, username, email, address, phone, website, company} = this.props;
		const {street, suite, city, zipcode, geo} = address;
		const { lat, lng } = geo;
		const {name:companyName, catchPhrase, bs} = company;
		return(
			<div className="card">
				
				<span>name : { name }</span>
				<span>username : { username }</span>
				<span>email : { email }</span>
				<span>phone : { phone }</span>
				<span>Adress : </span>
				<span>street : { street }</span>
				<span>suite : { suite }</span>
				<span>city : { city }</span>
				<span>zipcode: { zipcode }</span>
				<span>geo : </span>
				<span>lat : { lat }</span>
				<span>lng : { lng }</span>
				<span>website : { website }</span>
				<span>Company : </span>
				<span>name : { companyName }</span>
				<span>catch phtase : { catchPhrase }</span>
				<span>bs : { bs }</span>
				
			<BrowserRouter>
				<Link to={`/user/${id}`}> see me </Link>
			</BrowserRouter>
			</div>
		)
	}
}

export default User;
