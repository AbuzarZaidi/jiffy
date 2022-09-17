import { initializeApp } from 'firebase/app';
import firebase from '../firebase'
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyD1lQJtp4gTlOYWAfvCuBZH6nZ45f0FBKk",
    authDomain: "jiffy-e579d.firebaseapp.com",
    projectId: "jiffy-e579d",
    storageBucket: "jiffy-e579d.appspot.com",
    messagingSenderId: "736043927471",
    appId: "1:736043927471:web:463a4e99625f6f593c515a",
    measurementId: "G-S2ZKMM1N69"
  };
  const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//const col = collection(db, 'location');
//const db = firebase.firestore();
//console.log(JSON.stringify(db))
//const response=db.collection('location');
//console.log(JSON.stringify(response))
export default firebase