import React from "react"

export default class LoginComponent extends React.Component {
	constructor() {
		super()

		this.state = {
			userName: "",
			password: "",
		}

		this.submit = this.submit.bind(this)
		this.userNameOnChange = this.userNameOnChange.bind(this)
		this.passwordOnChange = this.passwordOnChange.bind(this)
		this.checkInputValid = this.checkInputValid.bind(this)
	}

	submit(e) {
		e.preventDefault()

		if (!this.checkInputValid()) {
			alert("不完整输入")
			return
		}

		this.props.submit(this.state)
	}

	checkInputValid() {
		let checkField = (field) => {
			return field !== ""
		}

		if (checkField(this.state.userName) && checkField(this.state.password)){
			return true
		}else{
			return false
		}
	}

	userNameOnChange(e) {
		let {
			target: {
				value: userName
			}
		} = e

		this.setState({
			userName,
		})
	}

	passwordOnChange(e) {
		let {
			target: {
				value: password
			}
		} = e

		this.setState({
			password,
		})
	}

	render() {
		return (
			<div className = {"container"}>
				<div className = {"jumbotron"}>
				 	<h1>周报</h1>
				 	<p>写周报，看周报</p>
				 	<div className = {"pull-right"}>
						<form>
							<div className = {"form-group"}>
								<label for = {"userName"}>用户名</label>
    							<input 
    								className = {"form-control"} 
    								id = {"userName"}
    								placeholder={"用户名"}
    								onChange = {this.userNameOnChange}
    								value = {this.state.userName}
    							/>
							</div>
							<div className = {"form-group"}>
								<label for = {"password"}>密码</label>
    							<input 
    								className = {"form-control"} 
    								id = {"password"}
    								placeholder = {"密码"}
    								onChange = {this.passwordOnChange}
    								value = {this.state.password}
    							/>
							</div>
							<button 
								className = {"btn btn-primary"}
								onClick = {this.submit}
							>
								登录
							</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}