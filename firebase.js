// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_RT8yHaXKauKecqyPOmwJRu2KmLGwmgI",
  authDomain: "fernandobespoke.firebaseapp.com",
  projectId: "fernandobespoke",
  storageBucket: "fernandobespoke.appspot.com",
  messagingSenderId: "181878728641",
  appId: "1:181878728641:web:cc48ad6e4a530ea17d7140",
  measurementId: "G-BBSPQJSVEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);