import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Properly typed variables
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Only initialize if we have the required config and we're on the client side
if (isBrowser && firebaseConfig.apiKey && firebaseConfig.apiKey !== 'your_api_key') {
  try {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (error) {
    console.error('Firebase initialization error:', error);
    app = null;
    auth = null;
    db = null;
  }
}

export { app, auth, db };