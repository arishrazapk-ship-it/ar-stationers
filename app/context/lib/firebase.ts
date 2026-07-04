import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBv6wvgLoR8fNVAhnpIOIHy5P52Dvr7IsY",
  authDomain: "ar-stationers.firebaseapp.com",
  projectId: "ar-stationers",
  storageBucket: "ar-stationers.firebasestorage.app",
  messagingSenderId: "487509354940",
  appId: "1:487509354940:web:e011b5e4e3255c3ede23b9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;