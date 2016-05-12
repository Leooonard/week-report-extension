import ReactDOM from "react-dom"
import React from "react"
import {WeekReport} from "./WeekReport.js"
import {ReportList} from "./ReportList.js"
import LoginPage from "./LoginPage.js"
import App from "./App.js"
import {Router, Route, IndexRoute, Link, hashHistory} from "react-router"

window.currentUser = {}

window.onload = function(){
	ReactDOM.render((
		<Router history={hashHistory}>
			<Route path = "/login" component = {LoginPage}/>
			<Route path = "/app" component = {App}>
				<Route path = "write" component = {WeekReport} />
		   	<Route path = "read" component = {ReportList} />
			</Route>
		</Router>
	), document.getElementById("root"))
}

