// hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  User,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remove the window check
    console.log('Setting up auth listener...');
    console.log('Auth object:', auth);
    
    if (!auth) {
      console.error('Auth is null or undefined');
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        console.log('Auth state changed:', firebaseUser?.email || 'No user');
        setUser(firebaseUser);
        setLoading(false);
      },
      (error) => {
        console.error('Auth observer error:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    console.log('Login attempt:', { email, authExists: !!auth });
    
    if (!auth) {
      return { success: false, error: 'Auth not initialized' };
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: result.user };
    } catch (error: any) {
      console.error('Login error:', error.code);
      let message = 'Login failed';
      if (error.code === 'auth/invalid-credential') {
        message = 'Invalid email or password';
      } else if (error.code === 'auth/too-many-requests') {
        message = 'Too many attempts. Try again later.';
      }
      return { success: false, error: message };
    }
  };

  const logout = async () => {
    if (!auth) return { success: false, error: 'Auth not available' };
    try {
      await signOut(auth);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  return { user, loading, login, logout };
};