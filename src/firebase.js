import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCUJWAFDlZt3k9Oc_ucelC52bXgNYWNw78",
  authDomain: "cookingapp-83d40.firebaseapp.com",
  projectId: "cookingapp-83d40",
  storageBucket: "cookingapp-83d40.appspot.com",
  messagingSenderId: "1012663519363",
  appId: "1:1012663519363:web:bea96d685f9365f466b3b6",
  measurementId: "G-SW4G45BV8C"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)