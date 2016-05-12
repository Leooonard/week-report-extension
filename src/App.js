import React from "react"
import NavHeader from "./NavHeader.js"

export default class App extends React.Component {
	constructor () {
		super();
	}

	render () {
		console.log(this.props)
		return (
			<div className = {"container"}>
				<NavHeader/>
				{this.props.children}
			</div>
		)
	}
}