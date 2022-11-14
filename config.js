import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyD8XPxAmL3lIAWxGII685FnTwrOT0tQ-po",
  authDomain: "project-71-10811.firebaseapp.com",
  projectId: "project-71-10811",
  storageBucket: "project-71-10811.appspot.com",
  messagingSenderId: "510082638234",
  appId: "1:510082638234:web:0c0f52d60a2924149a1a23"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
