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

export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const { uid } = userAuth;
  
    const userRef = db.doc(`users/${uid}`);
    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { displayName, email, photoURL } = userAuth;
      const userRoles = ['user'];
  
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          createdAt: timestamp,
          userRoles,
          ...additionalData,
        });
      } catch (err) {}
    }
  
    return userRef;
  };

// timestamp
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;