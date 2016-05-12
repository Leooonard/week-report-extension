import React from "react"
import LoginForm from "./LoginForm.js"
import {browserHistory} from "react-router"

export default class LoginPage extends React.Component {
	constructor() {
		super()
	}

	submit(loginInfo) {
		let url = "/api/login";

		$.get({
			url,
			data: loginInfo,
			dataType: "json",
		}).done(function(data){
			window.currentUser = data;
			browserHistory.push('/index.html#/write');
		}).fail(function(err){
			console.log(err);
		});
	}

	render() {
		return (
			<div className = {"container"}>
				<div className = {"jumbotron"}>
				 	<h1>周报</h1>
				 	<p>写周报，看周报</p>
				</div>
				<LoginForm submit = {this.submit}/>
			</div>
		)
	}
}