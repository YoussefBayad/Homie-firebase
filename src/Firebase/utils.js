import {firebaseConfig} from './config';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()

console.log("db", db)
console.log("auth", auth)