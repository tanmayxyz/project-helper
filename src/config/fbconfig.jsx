import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1HPXA_iO4d3TOoNnf5l-FzcJYlavb6F0",
  authDomain: "project-helper-1b23e.firebaseapp.com",
  databaseURL: "https://project-helper-1b23e.firebaseio.com",
  projectId: "project-helper-1b23e",
  storageBucket: "project-helper-1b23e.appspot.com",
  messagingSenderId: "144504935851",
  appId: "1:144504935851:web:dc4e7dfb65ddd942"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
