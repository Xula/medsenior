import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD7QWzpJl-rrUCyV534tP9xRZOwRv5zD64",
    authDomain: "medsenior-51473.firebaseapp.com",
    databaseURL: "https://medsenior-51473.firebaseio.com",
    projectId: "medsenior-51473",
    storageBucket: "medsenior-51473.appspot.com",
    messagingSenderId: "683739806986",
    appId: "1:683739806986:web:73ff85be04b35e7ca50ef3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;