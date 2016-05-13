import React from "react"
import NavHeader from "./NavHeader.js"

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			pathname: ''
		};
	}

	getChildPathname(pathname) {
		let pathnameRegExp = /^\/app\/(\w+)$/;
		let result = pathnameRegExp.exec(pathname);
		if (result === null) {
			return '';
		} else {
			let childPathname = result[1];
			return childPathname;
		}
	}

	componentWillReceiveProps(nextProps) {
		let pathname = nextProps.location.pathname;
		let childPathname = this.getChildPathname(pathname);
	}

	render() {
		return ( < div className = {
				"container"
			} >
			< NavHeader activeTab = {
				this.state.activeChildrenName
			}
			/> {
				this.props.children
			} < /div>
		)
	}
}