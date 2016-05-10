import React from "react"
import LoginComponent from "./LoginComponent.js"

export default class LoginPage extends React.Component {
	constructor() {
		super()
	}

	submit(loginInfo) {
		alert("submit")
	}

	render() {
		return (
			<LoginComponent submit = {this.submit}/>
		)
	}
}