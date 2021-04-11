import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Amplify  from 'aws-amplify';
import Auth from 'aws-amplify';
import config from './amplify-config'

// console.log(config)
Amplify.configure(config)
// You can get the current config object
const currentConfig = Auth.configure();
console.log("The current config is ",currentConfig)



ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
