import {firebaseConfig} from './config';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

// googleAuth
const GoogleProvider = new firebase.auth.GoogleAuthProvider();

GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);


// timestamp
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;