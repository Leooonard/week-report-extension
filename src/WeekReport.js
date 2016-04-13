import React from "react"
import {ReportForm} from "./ReportForm.js"

export class WeekReport extends React.Component {
	constructor(props, context){
		super(props, context)
		this.state = {
			url: "/oye!"
		}
	}

	render(){
		return (
			<div>
				<h1>我要写周报</h1>
				<ReportForm url = {this.state.url} />
			</div>
		)
	}
}