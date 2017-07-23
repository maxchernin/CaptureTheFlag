import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import * as firebase from 'firebase';
import './index.scss';

const store = configureStore();
// store.dispatch(load)
// Initialize Firebase
var config = {
	apiKey: "AIzaSyDEM2grIdKrbn6LDf8iwfJBdborHIwH3Zk",
	authDomain: "capturetheflag-16938.firebaseapp.com",
	databaseURL: "https://capturetheflag-16938.firebaseio.com",
	projectId: "capturetheflag-16938",
	storageBucket: "capturetheflag-16938.appspot.com",
	messagingSenderId: "861794506254"
};
firebase.initializeApp(config);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);
