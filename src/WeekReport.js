import React from "react"
import {
	ReportForm
} from "./ReportForm.js"
import {
	ReportItemList
} from "./ReportItemList.js"
import {
	NavHeader
} from "./NavHeader.js"

export class WeekReport extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			reportText: "",
			reportItems: []
		}

		this.reportTextChanged = this.reportTextChanged.bind(this)
		this.addReportItem = this.addReportItem.bind(this)
		this.deleteReportItem = this.deleteReportItem.bind(this)
		this.submitReport = this.submitReport.bind(this)
	}

	reportTextChanged(e) {
		this.setState({
			reportText: e.target.value,
		})
	}

	addReportItem() {
		let reportItems = this.state.reportItems
		let reportText = this.state.reportText

		reportItems.push(reportText)

		this.setState({
			reportItems,
			reportText: "",
		})
	}

	deleteReportItem(deleteIndex) {
		let text = this.state.reportText
		let items = this.state.reportItems

		this.setState({
			reportItems: items.filter((item, index) => {
				if (index !== deleteIndex) {
					return true
				} else {
					return false
				}
			}),
			reportText: text,
		})
	}

	submitReport() {
		let url = "/api/submitReport"
		let report = this.state.reportItems
		let self = this

		$.post({
			url,
			data: {
				report,
			},
			dataType: "json",
		}).done(function(data) {
			self.setState({
				reportItems: [],
				reportText: "",
			})
			alert("发表成功！")
		}).fail(function(err) {
			alert("发表失败。。 " + err)
		})
	}

	render() {
		return (
			<div>
				<ReportForm 
					reportText = {this.state.reportText}
					reportTextChanged = {this.reportTextChanged}
					addReportItem = {this.addReportItem}
					submitReport = {this.submitReport}
				/>
				<ReportItemList 
					items = {this.state.reportItems} 
					deleteReportItem = {this.deleteReportItem}
				/>
			</div>
		)
	}
}