import firebase from "firebase";



var firebaseConfig = {
    apiKey: "AIzaSyBteMbGFhPvf2gXsAa17BZHA9QWqVXpsYM",
    authDomain: "testingsite-4d8d0.firebaseapp.com",
    projectId: "testingsite-4d8d0",
    storageBucket: "testingsite-4d8d0.appspot.com",
    messagingSenderId: "239776795878",
    appId: "1:239776795878:web:69bc078c4855e91e993f27",
    measurementId: "G-EZV1EGH8Q0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;




  