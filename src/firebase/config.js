import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc8jaBU1GUM-8xyJAql8yKlnBPVWsl0Uk",
  authDomain: "blog-system-with-vue-capi.firebaseapp.com",
  projectId: "blog-system-with-vue-capi",
  storageBucket: "blog-system-with-vue-capi.appspot.com",
  messagingSenderId: "169613397842",
  appId: "1:169613397842:web:d6613628d55437b2c0748b",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { db };
