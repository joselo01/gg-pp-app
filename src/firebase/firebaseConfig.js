import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTWFTMcEvjKOf0wU8OJU091YQ4jhkelyY",
    authDomain: "gg-pp-login.firebaseapp.com",
    projectId: "gg-pp-login",
    storageBucket: "gg-pp-login.appspot.com",
    messagingSenderId: "663448664881",
    appId: "1:663448664881:web:d8b0a73f669ae55f278e10"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {
      db,
      firebase
  }