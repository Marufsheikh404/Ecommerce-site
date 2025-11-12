import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXGmZaqxEilyJR2wTs7uDBJhmDYtITINE",
    authDomain: "e-commerce-e7987.firebaseapp.com",
    projectId: "e-commerce-e7987",
    storageBucket: "e-commerce-e7987.firebasestorage.app",
    messagingSenderId: "377900572925",
    appId: "1:377900572925:web:5c67ded613500dfa92de94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); 