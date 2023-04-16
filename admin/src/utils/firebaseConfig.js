import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "netflix-16c38.firebaseapp.com",
  projectId: "netflix-16c38",
  storageBucket: "netflix-16c38.appspot.com",
  messagingSenderId: "958472068703",
  appId: "1:958472068703:web:ded490ca9207b9a00b85ea",
  measurementId: "G-NC0VLNEWH8",
};

// Initialize Firebase
const firebaseApp = () => {
  initializeApp(firebaseConfig);
};
export default firebaseApp;
