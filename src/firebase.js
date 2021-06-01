import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDOtsfdvhrpE-lpBfpUaTBffFc1W1FMI28",
    authDomain: "modernjavascript-ad4a6.firebaseapp.com",
    projectId: "modernjavascript-ad4a6",
    storageBucket: "modernjavascript-ad4a6.appspot.com",
    messagingSenderId: "261218281560",
    appId: "1:261218281560:web:24a3485193e3410fcc822d",
    measurementId: "G-9SGP1L5TRE",
  })
  .auth();
