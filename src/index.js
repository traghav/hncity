import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
import 'react-select/dist/react-select.css';
// var config = {
// apiKey: "AIzaSyBzsVcfwFAg1OHOMpo-d-P8aK5nWFMaUHc",
// authDomain: "hncity-2d41c.firebaseapp.com",
// databaseURL: "https://hncity-2d41c.firebaseio.com",
// projectId: "hncity-2d41c",
// storageBucket: "hncity-2d41c.appspot.com",
// messagingSenderId: "756209153194"
// };
// firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
