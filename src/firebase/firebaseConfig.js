import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfIKSymfaym39-WOwckaHxDhhWQk6cB00",
    authDomain: "todo-list-ab3d8.firebaseapp.com",
    projectId: "todo-list-ab3d8",
    storageBucket: "todo-list-ab3d8.appspot.com",
    messagingSenderId: "378831647692",
    appId: "1:378831647692:web:768190286e29c1f722e369"
};

initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();

export { googleAuthProvider };
