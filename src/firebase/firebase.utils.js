import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD97x85pSndixAyrNVgBdi_-1KX2bt4mMk",
  authDomain: "crwn-db-25dc6.firebaseapp.com",
  projectId: "crwn-db-25dc6",
  storageBucket: "crwn-db-25dc6.appspot.com",
  messagingSenderId: "718730249701",
  appId: "1:718730249701:web:7229f8eae4fcc99de21b0c",
  measurementId: "G-F6JBXQY94S",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
