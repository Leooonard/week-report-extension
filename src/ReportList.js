import React from "react"
import {NavHeader} from "./NavHeader.js"

export class ReportList extends React.Component {
	constructor() {
		super()
		this.state = {
			reports: [],
		}

		this.fetchReports()
	}

	fetchReports(){
		let url = "/api/fetchReports"
		let self = this

		$.get({
			url: url,
			dataType: "json",
		}).done(function(reports){
			self.setState({
				reports: reports
			})
		}).fail(function(err){
			console.log(err)
		})
	}

	toggleStar(){

	}

	getReportList() {
		let reportList = this.state.reports
		return reportList.map(function(report, index){
			return (
				<ul className = {"list-group"}>
					<li className = {"list-group-item active"}>
						周报
						<a href = {"#"} className = {"pull-right color-white"}>
							<span 
								className = {"glyphicon glyphicon-star-empty"}
							>
							</span>
						</a>
						<a href = {"#"} className = {"pull-right color-white"}>
							收起
						</a>
					</li>
					{
						report.texts.map(function(text, index){
							return (
								<li className = {"list-group-item"}>
									{text}
									<a href = {"#"} className = {"pull-right"}>
										评论
									</a>
								</li>
							)
						})
					}
				</ul>
			)
		})
	}

	render() {
		return (
			<div>
				{
					this.getReportList()
				}
			</div>
		)
	}
}