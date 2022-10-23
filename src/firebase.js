// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo8a5smK-aAD3cTughHxdCUd8O04Ywg9k",
  authDomain: "fir-react-tutorial-58af4.firebaseapp.com",
  projectId: "fir-react-tutorial-58af4",
  storageBucket: "fir-react-tutorial-58af4.appspot.com",
  messagingSenderId: "144311743114",
  appId: "1:144311743114:web:abbb597826a110cc017373",
  measurementId: "G-YF99M1BRSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
