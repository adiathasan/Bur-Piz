import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAbORbVkk5wfEHIAJveqorcbrE5Vtu44wA",
  authDomain: "bur-piz.firebaseapp.com",
  databaseURL: "https://bur-piz.firebaseio.com",
  projectId: "bur-piz",
  storageBucket: "bur-piz.appspot.com",
  messagingSenderId: "1069703357593",
  appId: "1:1069703357593:web:c781654537e90d158a4408",
  measurementId: "G-SB4H6BSDVR",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firestore };
