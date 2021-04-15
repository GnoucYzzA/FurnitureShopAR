  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA-6f6fKWiZnCzc8LyZk4318foR6ykCNUM",
    authDomain: "arfurnitureshop-556ff.firebaseapp.com",
    projectId: "arfurnitureshop-556ff",
    storageBucket: "arfurnitureshop-556ff.appspot.com",
    messagingSenderId: "680091011454",
    appId: "1:680091011454:web:ed2f6647d050ad811b4b2f",
    measurementId: "G-LJPD321DT9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebase.analytics();

  // Export firestore database
  export default firebaseApp.firestore()