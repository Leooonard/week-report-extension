import React from "react"
import {Link} from "react-router"

export class NavHeader extends React.Component {
	constructor() {
		super()
	}

	render() {
		const writeURL = "/write"
		const readURL = "/read"

		return (
			<nav className = {"navbar navbar-default"}>
				<div className = {"container-fluid"}>
					<div className = {"collapse navbar-collapse"}>
						<ul className = {"nav navbar-nav"}>
							<li className = {"active"}>
								<Link to = {writeURL}>
									写周报
								</Link>
							</li>
							<li>
								<Link to = {readURL}>
									看周报
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}