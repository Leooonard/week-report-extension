import React from "react"
import {InputArea} from "./InputArea.js"

export class ReportForm extends React.Component{
    constructor(){
        super()

        this.addReportItem = this.addReportItem.bind(this)
        this.submitReport = this.submitReport.bind(this)
    }

    addReportItem(e){
        e.preventDefault()
        this.props.addReportItem()
    }

    submitReport(e){
        e.preventDefault()
        this.props.submitReport()
    }

	render(){
		return (
			<form style = {{marginBottom: 20}}>
                <div className = {"form-group"}>
                    <textarea 
                        className = {"form-control"} 
                        onChange = {this.props.reportTextChanged} 
                        value = {this.props.reportText}>
                    </textarea>
                </div>
                <button 
                    className = {"btn btn-primary"}
                    style = {{marginRight: 10}}
                    onClick = {this.addReportItem}>
                    添加一条
                </button>
                <button 
                    className = {"btn btn-primary"}
                    onClick = {this.submitReport}>
                    发表
                </button>
			</form>
		)
	}
}