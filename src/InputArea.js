import React from "react"

export class InputArea extends React.Component{
	constructor(props, context){
		super(props, context)
		this.state = {
			textList: [],
			inputText: "",
		}

		this.render = this.render.bind(this)
		this.inputChange = this.inputChange.bind(this)
		this.appendInput = this.appendInput.bind(this)
		this.generateTextList = this.generateTextList.bind(this)
		this.generatePlaceholder = this.generatePlaceholder.bind(this)
	}

	generateTextList(){
		return this.state.textList.map(function(val, idx, arr){
			return (
				<li>{val}</li>
			)
		})
	}

	generatePlaceholder(){
		if(this.state.textList.length === 0){
			return (
				<p>{this.props.placeholder}</p>
			)
		}
	}

	inputChange(e){
		this.setState({
			inputText: e.target.value
		})
		console.log(this.state.inputText)
	}

	appendInput(){
		var inputText = this.state.inputText
		var textList = this.state.textList
		textList.push(inputText)
		this.setState({
			textList: textList,
			inputText: "",
		})
	}

	render(){
		return (
			<div>
				<h3>{this.props.title}</h3>
				{
					this.generatePlaceholder()
				}
				<ul>
					{this.generateTextList()}
				</ul>
			</div>
		)
	}
}