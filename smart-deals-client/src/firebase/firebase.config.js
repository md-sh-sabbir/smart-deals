// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkU-HOmnq4oeguMs54qS8KpWjKvaiYkig",
  authDomain: "smart-deals-31e00.firebaseapp.com",
  projectId: "smart-deals-31e00",
  storageBucket: "smart-deals-31e00.firebasestorage.app",
  messagingSenderId: "573281610951",
  appId: "1:573281610951:web:761a20663852f8cc06e2e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);