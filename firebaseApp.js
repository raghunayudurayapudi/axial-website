// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, push } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP-rFYtcah_JSDTmFn3q5tGVs4BOpHoXM",
  authDomain: "axial-65389.firebaseapp.com",
  databaseURL: "https://axial-65389-default-rtdb.firebaseio.com",
  projectId: "axial-65389",
  storageBucket: "axial-65389.appspot.com",
  messagingSenderId: "328198914376",
  appId: "1:328198914376:web:100e39a371b218eb33737d",
  measurementId: "G-20BNQEVY3N",
  databaseURL: "https://axial-65389-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const writeContactUsData = async ({firstName, lastName, email, phone, message}) => {
    const contactUsRef = ref(db, 'contactus');
    const newRef = push(contactUsRef);
    await set(newRef, {
      firstName,
      lastName,
      email,
      phone,
      message
    });
}