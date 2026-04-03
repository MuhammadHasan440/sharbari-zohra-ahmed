import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  User,
  onAuthStateChanged
} from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }

    // Check if auth is initialized
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    // Only run on client side
    if (typeof window === 'undefined' || !auth) {
      return { success: false, error: 'Auth not initialized' };
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: result.user };
    } catch (error: any) {
      console.error('Login error:', error);
      let errorMessage = 'Login failed';
      
      if (error.code === 'auth/invalid-credential') {
        errorMessage = 'Invalid email or password';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'User not found';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Wrong password';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later';
      }
      
      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    if (typeof window === 'undefined' || !auth) {
      return { success: false, error: 'Auth not initialized' };
    }

    try {
      await signOut(auth);
      return { success: true };
    } catch (error: any) {
      console.error('Logout error:', error);
      return { success: false, error: error.message };
    }
  };

  return { user, loading, login, logout };
};