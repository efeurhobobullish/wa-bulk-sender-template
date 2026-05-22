import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQ34F5SsjS7e2_yoJdDPwjrP66kJ0HH-g",
  authDomain: "wa-bulk-sender-template.firebaseapp.com",
  projectId: "wa-bulk-sender-template",
  storageBucket: "wa-bulk-sender-template.firebasestorage.app",
  messagingSenderId: "249305684771",
  appId: "1:249305684771:web:be30309fdb910fe0a44a96",
  measurementId: "G-1V9PQ9Y0YK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();

export { auth, githubProvider };
