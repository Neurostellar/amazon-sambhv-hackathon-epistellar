import React, { Component, useEffect, useState } from 'react';
// Semantic UI
import { Grid, Button, Form, Image, Modal, FeedSummary } from 'semantic-ui-react'

// Local Style
import './Home.css';

// Local Image
import Background from '../Assets/Background.png'

// Local Component
import Cards from '../components/Cards'


// Custom imports
const fs = require('fs');
const edfdecoder = require("edfdecoder");
const SpectrumPlot2 = require("spectrum-plot2")

const apiName = 'RequestReportsApi';
const apiPath = '/report';

// const apiName = 'RequestReportsApi';
const apiPath2 = '/upload';
// var CanvasJS = require('canvasjs');
import Sockette from "sockette";
let ws = null;
import EEG from './EEG'
import ReactLoading from "react-loading"




var Loader = require('react-loader');
 
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			DataTaggingModelState: false,
			ImageURL: '',
			OCRText: '',
			DataTaggingIndex: 0,
			OCRTaggingImage: {},

			datasize: null,

			ImageTaggingData: [],
			DataTagging: {},

			Info: '',
			NeedUpdateFlag: false,
			UserMailID: '',
			gotData: false,
			gotReport: false,
			loading: false
		};
	}



	async componentDidMount() {
		try {
			// const user = await Auth.currentUserInfo()
			Auth.currentSession().then(session=>{
				//You can print them to see the full objects
				// console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
				// console.log(`myJwt: ${session.idToken.jwtToken}`)
				this.state.token = session.idToken.jwtToken
			  })			  
		} catch (err) {
			console.log('error line: 150 : ', err)
		}

	}

	sendReq = async () => {
		console.log("In request")
		const apiRequest = {
			body: '100',
			headers: {
			'Authorization': this.state.token, // To be updated
			'Content-Type': 'application/json'
			}
		};
		console.log('API Request:', apiRequest);
		let result = await API.post(apiName, apiPath, apiRequest);
		console.log("We got back from the request", result);
	}
	
	uploadFile = async() => {
		// console.log(this.state.data);
		var buffer = this.state.data;
		var decoder = new edfdecoder.EdfDecoder();
		decoder.setInput( buffer );
		decoder.decode();
		var myEdf = decoder.getOutput();
		var signalIndex = 0;
		var firstRecord = 0;
		var numberOfRecords = 10;
		var aLongerSignal = myEdf.getPhysicalSignalConcatRecords( signalIndex, firstRecord, numberOfRecords );
		// console.log(aLongerSignal)
		this.setState({
			gotData: true,
			eegdata: aLongerSignal
		});
	}

	getReport = async() => {
		this.setState({loading: true})
		ws = new Sockette(
			"wss://fg43blujpe.execute-api.us-east-2.amazonaws.com/production/",
			{
			timeout: 5e3,
			maxAttempts: 1,
			onopen: e => console.log("connected:", e),
			onmessage: e => {console.log("Got message", e); this.setState({'gotReport': true,'label': e.data, 'loading': false})},
			onreconnect: e => console.log("Reconnecting...", e),
			onmaximum: e => console.log("Stop Attempting!", e),
			onclose: e => console.log("Closed!", e),
			onerror: e => console.log("Error:", e)
			}
		);
		console.log("Upload starting");
		await Storage.put(this.state.fileToUpload.name, this.state.fileToUpload).then(res => {
			console.log("Upload Succesful");
		})
		.catch(e =>{
			console.log("Not successful");
		});
		console.log("Upload waiting");
		return function cleanup() {
			ws && ws.close();
			ws = null;
			};
	}


	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	render() {
		// console.log(this.state)
		let button;
		if(this.state.gotData){
			button = <EEG data={this.state.eegdata}></EEG> 
		}
		else{
			button = <div></div>
		}
		return <div className="Home"><div>
		<div>
			Upload EEG files for analysis
		</div>
		<div>
			<form>
				<div className="form-group">
					<input
						type="file"
						className="form-control-file"
						id="fileUpload"
						onChange={e => {
							this.setState({
								fileToUpload: e.target.files[0],
								gotData: false,
								gotReport: false
							});
							let reader = new FileReader();
							let file = e.target.files[0];
						
							reader.onloadend = () => {
							this.setState({
								file: file,
								data: reader.result
							});
							}
							this.setState({filedata : reader.readAsArrayBuffer(file)});
						}}
					/>
					{this.state.fileToUpload ? (
						<button
							type="button"
							className="btn btn-light"
							onClick={e => {
								// console.log(this.state.fileToUpload);
								this.uploadFile();
							}}
						>
							Upload your file
						</button>
					) : null }
<div>
						<span>
							{this.state.uploadSuccess
								? "File Upload Successfully"
								: ""}
						</span>
					</div>
				</div>
			</form>
		{button}
		{this.state.gotData && !this.state.gotReport ? (
						<button
							type="button"
							className="btn btn-light"
							onClick={e => {
								this.getReport();
							}}
						>
							Analyse EEG
						</button>
					) : null }
		{this.state.gotData && !this.state.gotReport && this.state.loading ? (
						<h3>LOADING PLEASE WAIT!</h3> 
					) : null }
		{this.state.gotData && this.state.gotReport && !this.state.loading ? (
						<h3> The EEG Segment is {this.state.label}</h3>
					) : null }
		</div>
	</div>
</div>;
	}
}
