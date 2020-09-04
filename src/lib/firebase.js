import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAqQxwOTW6MQRo96ExBz6LGwW-pGQs-BC0",
  authDomain: "hicomf-d730c.firebaseapp.com",
  databaseURL: "https://hicomf-d730c.firebaseio.com",
  projectId: "hicomf-d730c",
  storageBucket: "hicomf-d730c.appspot.com",
  messagingSenderId: "389732315539",
  appId: "1:389732315539:web:6b1ff9cefe88a5646c7866",
  measurementId: "G-NMXNXMQXK0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;