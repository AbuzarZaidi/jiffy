import { initializeApp } from 'firebase/app';
import firebase from '../firebase'
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyApfVOAcPyKnWgMlDCQlrlJvDLro2LW4Xo",
  authDomain: "jiffy-7c780.firebaseapp.com",
  projectId: "jiffy-7c780",
  storageBucket: "jiffy-7c780.appspot.com",
  messagingSenderId: "858697568951",
  appId: "1:858697568951:web:c314027e738f1df16db332",
  measurementId: "G-ZMK5HQEQFN"
};
  const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//const col = collection(db, 'location');
//const db = firebase.firestore();
//console.log(JSON.stringify(db))
//const response=db.collection('location');
//console.log(JSON.stringify(response))
export default firebase