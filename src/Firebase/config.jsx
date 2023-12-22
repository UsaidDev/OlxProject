import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRFmb3CBQYWLFnUH7iK8RChlX08nAyVpM",
  authDomain: "olxproject-ffa53.firebaseapp.com",
  projectId: "olxproject-ffa53",
  storageBucket: "olxproject-ffa53.appspot.com",
  messagingSenderId: "130976844401",
  appId: "1:130976844401:web:6e40745c5df8b150ec29d0",
  measurementId: "G-ERLDWC65XC"
};

export const firebase=initializeApp(firebaseConfig);