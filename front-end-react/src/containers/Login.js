import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Form } from 'semantic-ui-react'

import './Login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			email: '',
			password: '',
			submittedName: '',
			submittedEmail: ''
		};
	}


	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleSubmit = async () => {
		console.log(this.state.email, this.state.password)
		this.setState({ isLoading: true });
		console.log(Auth.configure())
		await Auth.signIn(this.state.email, this.state.password)
			.then((user) => {
				console.log("Done")
				if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
					let password = 'Qwerty@123'
					Auth.completeNewPassword(user, password).then((r) => {
						Auth.currentUserInfo()
						.then((r)=>{
							this.props.userHasAuthenticated(true);
							this.setState({ isLoading: false });
							this.props.history.push('/Home');
						})
					}).catch((e) => {
						console.log(e)
					})
				} else {
					this.setState({ isLoading: false });
					this.props.history.push('/Home');
					window.location.reload();
				}

			})
			.catch((e) => {
				console.log('Auth.signIn error Line: 37: ', e)
				alert(e.message);
				this.setState({ isLoading: false });
			})
	};


	render() {
		return (
			<div className="Login">
				<Form onSubmit={this.handleSubmit}>
					<lable>Email</lable>
					<Form.Input
						type='username'
						placeholder='usename'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
					/>

					<lable>Password</lable>
					<Form.Input
						type='password'
						placeholder='Password'
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<Form.Button
						className='FormButton'
						primary
						disabled={!this.validateForm()}
						content='Login'
						loading={this.state.isLoading}
					/>
				</Form>
			</div>
		);
	}
}
