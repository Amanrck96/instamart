import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDL-tab5Y-VHhtqq-W8rE_go3FYfNjSKJc",
  authDomain: "instamart-82b59.firebaseapp.com",
  projectId: "instamart-82b59",
  storageBucket: "instamart-82b59.firebasestorage.app",
  messagingSenderId: "1043335628675",
  appId: "1:1043335628675:web:15f6e5a686d9f35e6758b6",
  measurementId: "G-S6NYH8B6D7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;