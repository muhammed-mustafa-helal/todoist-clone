import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA9rTITN0IS-RGlbLvlZ57KRmqboy5WtKg",
  authDomain: "todoist-muhammed.firebaseapp.com",
  databaseURL:
    "https://todoist-muhammed-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoist-muhammed",
  storageBucket: "todoist-muhammed.appspot.com",
  messagingSenderId: "647747005989",
  appId: "1:647747005989:web:91675c82f33ad0758099cc",
});

export { firebaseConfig as firebase };
