import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAJv3lVFacWJAJux9MKPaIC0vPiXo0KgCg",
  authDomain: "yalla-deal.firebaseapp.com",
  databaseURL: "https://yalla-deal.firebaseio.com",
  projectId: "yalla-deal",
  storageBucket: "yalla-deal.appspot.com",
  messagingSenderId: "487993183532",
  appId: "1:487993183532:web:1ef260c5122871485f7089",
  measurementId: "G-5W7SDSXN7V"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase;