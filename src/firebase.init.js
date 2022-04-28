// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA4zyU12Y5FinBFj2x9CkNRew0CL3J7Jp0",
//   authDomain: "inventory-management-655e0.firebaseapp.com",
//   projectId: "inventory-management-655e0",
//   storageBucket: "inventory-management-655e0.appspot.com",
//   messagingSenderId: "1078444586785",
//   appId: "1:1078444586785:web:cf772278b46655757c7060",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
