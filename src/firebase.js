// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfPMhgyY86w8ix6dcMPydJO284D-NxIBA",
  authDomain: "water-monitoring-vyd.firebaseapp.com",
  projectId: "water-monitoring-vyd",
  storageBucket: "water-monitoring-vyd.appspot.com",
  messagingSenderId: "481614766941",
  appId: "1:481614766941:web:0107bc8cdbcac2f002beb4",
  measurementId: "G-3SE2B7XK4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
