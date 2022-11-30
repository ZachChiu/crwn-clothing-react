/* eslint-disable no-unused-vars */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoHCUnXayOExmlHIWg__XOheY2CXjuKy0",
  authDomain: "crwn-clothing-react-81e70.firebaseapp.com",
  projectId: "crwn-clothing-react-81e70",
  storageBucket: "crwn-clothing-react-81e70.appspot.com",
  messagingSenderId: "571423901431",
  appId: "1:571423901431:web:5630eec138f4ecedb375f2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};

export { auth, signInWithGooglePopup, db, createUserDocFromAuth };
