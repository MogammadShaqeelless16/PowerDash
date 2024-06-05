import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import env from './env';

firebase.initializeApp({
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
});

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };