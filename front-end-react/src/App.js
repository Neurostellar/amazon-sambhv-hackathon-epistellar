import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react'
import Routes from './Routes';
import { Auth } from 'aws-amplify';
import './App.css';

import Smartailogo from './Assets/Neurostellar.jpeg'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: false,
			isAuthenticating: true,
			isTeacher: false,
			UploadModal: false,
			NotificationModal: false,
			VideoUrl: "",
			UserId: ''
		};
	}

	async componentDidMount() {
		try {
			if (await Auth.currentSession()) {
				this.userHasAuthenticated(true);

				await Auth.currentUserInfo()
					.then((r) => {
						this.userHasAuthenticated(true);
						this.userIsTeacher(false)
						this.setState({UserId: r.attributes.email, isLoading: false });
						this.props.history.push('/Home');
					})

			}
		} catch (e) {
			if (e !== 'No current user') {
				alert(e);
			}
		}

		this.setState({ isAuthenticating: false });
	}

	userHasAuthenticated = authenticated => {
		this.setState({ isAuthenticated: authenticated });
	};

	userIsTeacher = data => {
		this.setState({ isTeacher: data });
	};


	handleLogout = async event => {
		await Auth.signOut().then((r) => {
			console.log(r)
		}).catch((e) => {
			console.log(e, event)
		})
		this.setState({UserId: null})
		this.userHasAuthenticated(false);
		this.userIsTeacher(false)
		this.props.history.push('/login');
	};

	handleItemClick = (e, { name }) => {
		if (name === 'Smartail') {
			this.props.history.push('/');
		}
		if (name === 'Login') {
			this.props.history.push('/login');
		}
		if (name === 'Logout') {
			this.handleLogout()
		}
	}

	HandleModelClose() {
		this.setState({ NotificationModal: false, VideoUrl: "" })
	}

	HandleNewNotification(data) {
		console.log('data: ', data.VideoUrl)
		this.setState({ VideoUrl: data.VideoUrl })
	}


	render() {
		const childProps = {
			isAuthenticated: this.state.isAuthenticated,
			userHasAuthenticated: this.userHasAuthenticated,
			isTeacher: this.state.isTeacher,
			userIsTeacher: this.userIsTeacher
		};
		return (
			<Container className="App">
				<Menu>
					<Menu.Item onClick={this.handleItemClick} name='Smartail'>
						<Image wrapped size='tiny' src={Smartailogo} />
					</Menu.Item>
					{/* <p style={{display: 'flex', textAlign: 'center', alignItems: 'flex-end', marginLeft: '1%'}}>{this.state.UserId}</p> */}
					<Menu.Menu position='right'>
						{this.state.isAuthenticated ?
							<Menu.Menu position='right'>
								<Menu.Item onClick={this.handleItemClick} name='Logout'>
									Logout
							</Menu.Item>
							</Menu.Menu>
							:
							<Menu.Item onClick={this.handleItemClick} name='Login'>
								Login
         		 		</Menu.Item>
						}
					</Menu.Menu>
				</Menu>
				<Routes childProps={childProps} />
			</Container>
		);
	}
}

export default withRouter(App);