import React, { Component } from 'react';
import './Welcome.css'

export default class evWelcome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
		};
	}

	async componentDidMount() {
		this.setState({ isLoading: false });
		console.log(this.props.isAuthenticated)
	}

	renderClearance() {
		return (
			<div className="test">
				<h1 style={{textAlign:'center'}}>Welcome to  Neurostellar</h1>
				<p style={{fontSize:18, fontWeight:300, textAlign:'center'}}>Neurostellar is a startup, which develops and transforms the quality of Neurotechnology to next level through AI technologies such as deep learning, neural networks and more. Out first product covers Epilepsy and it aims to quickly and accurately diagnose epilepsy. We aim to cover areas like NeuroMarketing, NeuroEducation, NeuroCognition, NeuroGaming in the future. <br /><br />
				</p>
			</div>
		);
	}

	render() {
		// return <div className="Clearance">{this.props.isAuthenticated ? this.renderClearance() : null}</div>;
		return <div className="Clearance">{this.renderClearance()}</div>;
	}
}
