import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBcfx-_dvL1eGN5fCIPw9oVLta8ESAJLAw",
    authDomain: "fir-bfad4.firebaseapp.com",
    projectId: "fir-bfad4",
    storageBucket: "fir-bfad4.appspot.com",
    messagingSenderId: "1038366388529",
    appId: "1:1038366388529:web:04cdada1c46822fa400010"
  };


export default firebase.initializeApp(firebaseConfig) 