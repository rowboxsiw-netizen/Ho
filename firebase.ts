
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_-ujkxGhtR8SEh04S38vCsKBokzlSHI0",
  authDomain: "authorizeqzzio.firebaseapp.com",
  databaseURL: "https://authorizeqzzio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "authorizeqzzio",
  storageBucket: "authorizeqzzio.firebasestorage.app",
  messagingSenderId: "243424721218",
  appId: "1:243424721218:web:a59fe9a7d73094cd0c30db",
  measurementId: "G-5L27XWCTV6"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
