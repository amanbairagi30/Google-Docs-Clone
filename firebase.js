import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwIVYYT3iu5ZcHWYw7hgKvEJn9_o4NjSY",
  authDomain: "docs-clone-2e528.firebaseapp.com",
  projectId: "docs-clone-2e528",
  storageBucket: "docs-clone-2e528.appspot.com",
  messagingSenderId: "703657920317",
  appId: "1:703657920317:web:1a37faf55d6f32851a2754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth , provider}