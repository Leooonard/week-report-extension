import React from "react"

export class ReportItemList extends React.Component {
	constructor() {
		super()

		this.getReportItems = this.getReportItems.bind(this)
		this.deleteReportItem = this.deleteReportItem.bind(this)
	}

	deleteReportItem(e) {
		let getItemIndex = (e) => {
			let target = e.target
			let $li = $(target).closest("li")
			let itemIndex = $li.attr("data-index")
			return parseInt(itemIndex, 10)
		}

		let itemIndex = getItemIndex(e)

		this.props.deleteReportItem(itemIndex)

	}

	getReportItems() {
		let self = this

		return this.props.items.map(function(text, idx) {
			return (
				<li className = {"list-group-item"} data-index = {idx}>
					{text}
					<button 
						className = {"close pull-right"}
						onClick = {self.deleteReportItem}>
						<span>&times;</span>
					</button>
				</li>
			)
		})
	}

	render() {
		let itemCount = this.props.items.length
		let ul = null

		if (itemCount > 0) {
			ul = (
				<ul className = {"list-group"}>
					{
						this.getReportItems()
					}
				</ul>
			)
		} 

		return ul
	}
}