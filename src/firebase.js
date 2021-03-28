// Fire base configurations.

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChL76zIxtyDDjhaO8lWdz6ZjYjNpyDiFA",
  authDomain: "fbook-clon.firebaseapp.com",
  projectId: "fbook-clon",
  storageBucket: "fbook-clon.appspot.com",
  messagingSenderId: "354669893715",
  appId: "1:354669893715:web:d7ec104605b88a931b0ea6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
