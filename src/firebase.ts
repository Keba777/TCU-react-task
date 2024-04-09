import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKcyUAbS0Y8ZmATBWx-WFHH6t-cuIYSMY",
  authDomain: "tcu-react.firebaseapp.com",
  projectId: "tcu-react",
  storageBucket: "tcu-react.appspot.com",
  messagingSenderId: "303002505647",
  appId: "1:303002505647:web:c63de7394d943ecf721f5a",
  measurementId: "G-D1TXQVZLL7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
