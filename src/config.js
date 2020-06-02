import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCZmpriEZ3VbrH3habI2XfQpxF0C6OIdzM",
  authDomain: "candala-labs.firebaseapp.com",
  databaseURL: "https://candala-labs.firebaseio.com",
  projectId: "candala-labs",
  storageBucket: "candala-labs.appspot.com",
  messagingSenderId: "1094481592996",
  appId: "1:1094481592996:web:3de218fde23d6e6595dc31",
};

var fire = firebase.initializeApp(firebaseConfig);

fire
  .firestore()
  .enablePersistence()
  .catch(function (err) {
    if (err.code == "failed-precondition") {
      // probably multible tabs open at once
      console.log("persistance failed");
    } else if (err.code == "unimplemented") {
      // lack of browser support for the feature
      console.log("persistance not available");
    }
  });
export default fire;

// var firebaseConfig = {
//   apiKey: "AIzaSyCZmpriEZ3VbrH3habI2XfQpxF0C6OIdzM",
//   authDomain: "candala-labs.firebaseapp.com",
//   databaseURL: "https://candala-labs.firebaseio.com",
//   projectId: "candala-labs",
//   storageBucket: "candala-labs.appspot.com",
//   messagingSenderId: "1094481592996",
//   appId: "1:1094481592996:web:3de218fde23d6e6595dc31",
// };
// // Initialize Firebase
// var fire = firebase.initializeApp(firebaseConfig);
// export default fire;
