import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyBopJQ7tyrDRyUbuDwRULNTEdPa6thidec",
    authDomain: "the-watcher-de700.firebaseapp.com",
    databaseURL: "https://the-watcher-de700.firebaseio.com",
    projectId: "the-watcher-de700",
    storageBucket: "the-watcher-de700.appspot.com",
    messagingSenderId: "1057377940886"
};
firebase.initializeApp(config);
//Initialize Firebase Auth UI
let fireUi = new firebaseui.auth.AuthUI(firebase.auth());
let uiConfig = {
signInSuccessUrl: '/',
signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
],
// Terms of service url.
tosUrl: '<your-tos-url>',
// Privacy policy url.
privacyPolicyUrl: '<your-privacy-policy-url>'
};
fireUi.start('#firebaseui-container', uiConfig);
//on auth change display login
firebase.auth().onAuthStateChanged( user => {
    if (user) {
        document.getElementById('firebaseui-container').style.display = 'none';
    } else {
        document.getElementById('firebaseui-container').style.display = 'block';
    }
    ReactDOM.render(<App user={user}/>, document.getElementById('root'));
    registerServiceWorker();
});