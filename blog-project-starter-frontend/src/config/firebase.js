import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7eDpqSTL34o79tHT-Mawkb8_SvKxrCCQ",
  authDomain: "blog-project-dbdfb.firebaseapp.com",
  projectId: "blog-project-dbdfb",
  storageBucket: "blog-project-dbdfb.firebasestorage.app",
  messagingSenderId: "67829457836",
  appId: "1:67829457836:web:069ab79325e94f53a41009",
  measurementId: "G-FML5P4919F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
