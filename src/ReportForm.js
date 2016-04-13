import React from "react"

export class ReportForm extends React.Component{
    constructor(){
        super()

        this.state = {
            title: "",
            done: "",
            todo: "",
            share: "",
        }


        this.titleChange = this.titleChange.bind(this)
        this.doneChange = this.doneChange.bind(this)
        this.todoChange = this.todoChange.bind(this)
        this.shareChange = this.shareChange.bind(this)
        this.submit = this.submit.bind(this)
    }

    titleChange(e){
        this.setState({
            title: e.target.value,
        })
    }

    doneChange(e){
        this.setState({
            done: e.target.value,
        })
    }

    todoChange(e){
        this.setState({
            todo: e.target.value,
        })
    }

    shareChange(e){
        this.setState({
            share: e.target.value,
        })
    }

    submit(e){
        e.preventDefault()
        console.log(this.state)
    }

	render(){
		return (
			<form method = "post" action = {this.props.url} onSubmit = {this.submit}>
				<input name = "titleArea" onChange = {this.titleChange}/>
                <textarea name = "doneArea" onChange = {this.doneChange}/>
                <textarea name = "todoArea" onChange = {this.todoChange}/>
                <textarea name = "shareArea" onChange = {this.shareChange}/>
                <button>发表</button>
			</form>
		)
	}
}