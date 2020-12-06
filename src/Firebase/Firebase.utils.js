import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

console.log('storage bucket', process.env.storageBucket)

firebase.initializeApp(config);

export const fbStorage = firebase.storage();
