
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1LeNOmswazf7TsBAN-NHV_dJkubFUzKc",
  authDomain: "booking-89ae6.firebaseapp.com",
  projectId: "booking-89ae6",
  storageBucket: "booking-89ae6.appspot.com",
  messagingSenderId: "628423935797",
  appId: "1:628423935797:web:26da634c2f012fa53e6e7c",
  measurementId: "G-91P00NF4Q6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};