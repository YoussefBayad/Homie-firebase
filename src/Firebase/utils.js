import { firebaseConfig } from './config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

// googleAuth
const GoogleProvider = new firebase.auth.GoogleAuthProvider();

GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

const unknownUser =
  'https://firebasestorage.googleapis.com/v0/b/homiees.appspot.com/o/unknownUser.jpg?alt=media&token=a37be09e-37a3-496f-b563-69a17010ee81';
export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const { uid } = userAuth;

  const userRef = db.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    let { displayName, email, photoURL } = userAuth;
    const userRoles = ['user'];
    photoURL = photoURL ? photoURL : unknownUser;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt: new Date().toISOString(),
        userRoles,
        postsCount: 0,
        followersCount: 0,
        followingCount: 0,
        bio: '',
        ...additionalData,
      });
    } catch (err) {
      alert(err.message);
    }
  }

  return userRef;
};
