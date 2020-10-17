import * as firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBU6P_CPYIebZ1RtuAv27Zw8tX3zadbt5I",
    authDomain: "britjobs-kingkon.firebaseapp.com",
    databaseURL: "https://britjobs-kingkon.firebaseio.com",
    projectId: "britjobs-kingkon",
    storageBucket: "britjobs-kingkon.appspot.com",
    messagingSenderId: "681080506631",
    appId: "1:681080506631:web:c015b69c378e79d4f51da2",
    measurementId: "G-9MHBP9E2Y0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Services
  let firebaseAuth = firebase.auth();

  //Auth Providers
  let googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebaseAuth, googleAuthProvider};