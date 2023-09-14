
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCnXTaTexTQegYxaP_31bW2w5PtT443nEM",
  authDomain: "fir-d1ce8.firebaseapp.com",
  projectId: "fir-d1ce8",
  storageBucket: "fir-d1ce8.appspot.com",
  messagingSenderId: "87046963457",
  appId: "1:87046963457:web:69458da7753152714adb00",
  measurementId: "G-S1EQETBKGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;

