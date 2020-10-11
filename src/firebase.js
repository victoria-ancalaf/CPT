import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAryiEKpbOjZYDlbN8DRMQQvWGyccdbK7c",
    authDomain: "comida-para-todos-644ce.firebaseapp.com",
    databaseURL: "https://comida-para-todos-644ce.firebaseio.com",
    projectId: "comida-para-todos-644ce",
    storageBucket: "comida-para-todos-644ce.appspot.com",
    messagingSenderId: "745492828204",
    appId: "1:745492828204:web:fdd184c83a82fa0c4d0189"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()

  export { firebase, auth }