// hooks/useBlogs.ts
import { useState, useEffect, useCallback } from 'react';
import { db } from '@/lib/firebase';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  Timestamp,
  serverTimestamp
} from 'firebase/firestore';
import { Blog, BlogInput } from '@/types/blog';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!db) {
      console.error('Firestore not initialized');
      setLoading(false);
      setError('Database not available');
      return;
    }

    console.log('Setting up Firestore listener for blogs');
    
    const q = query(
      collection(db, 'blogs'),
      orderBy('createdAt', 'desc')
    );
    
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const blogsData = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            // Convert Firestore Timestamp to string if needed
            createdAt: data.createdAt?.toDate?.()?.toISOString() || data.createdAt,
            updatedAt: data.updatedAt?.toDate?.()?.toISOString() || data.updatedAt,
          };
        }) as unknown as Blog[];
        
        console.log(`Loaded ${blogsData.length} blogs`);
        setBlogs(blogsData);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Firestore listener error:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => {
      console.log('Cleaning up Firestore listener');
      unsubscribe();
    };
  }, []);

  const addBlog = useCallback(async (blogData: Omit<BlogInput, 'createdAt'>) => {
    if (!db) {
      return { success: false, error: 'Firestore not initialized' };
    }

    try {
      const newBlog = {
        ...blogData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        // Add any default values
        featured: blogData.featured || false,
        views: 0,
        likes: 0,
      };
      
      const docRef = await addDoc(collection(db, 'blogs'), newBlog);
      console.log('Blog added with ID:', docRef.id);
      return { success: true, id: docRef.id };
    } catch (error: any) {
      console.error('Add blog error:', error);
      return { success: false, error: error.message };
    }
  }, []);

  const updateBlog = useCallback(async (id: string, blogData: Partial<BlogInput>) => {
    if (!db) {
      return { success: false, error: 'Firestore not initialized' };
    }

    try {
      const blogRef = doc(db, 'blogs', id);
      
      // Remove undefined, null, and empty string values
      const updateData = Object.entries(blogData).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          acc[key] = value;
        }
        return acc;
      }, {} as Record<string, any>);
      
      // Add updated timestamp
      updateData.updatedAt = serverTimestamp();
      
      await updateDoc(blogRef, updateData);
      console.log('Blog updated:', id);
      return { success: true };
    } catch (error: any) {
      console.error('Update blog error:', error);
      return { success: false, error: error.message };
    }
  }, []);

  const deleteBlog = useCallback(async (id: string) => {
    if (!db) {
      return { success: false, error: 'Firestore not initialized' };
    }

    try {
      const blogRef = doc(db, 'blogs', id);
      await deleteDoc(blogRef);
      console.log('Blog deleted:', id);
      return { success: true };
    } catch (error: any) {
      console.error('Delete blog error:', error);
      return { success: false, error: error.message };
    }
  }, []);

  const getBlogById = useCallback(async (id: string) => {
    if (!db) {
      return { success: false, error: 'Firestore not initialized' };
    }

    try {
      const blogRef = doc(db, 'blogs', id);
      const blogDoc = await getDoc(blogRef);
      
      if (blogDoc.exists()) {
        const data = blogDoc.data();
        return { 
          success: true, 
          data: { 
            id: blogDoc.id, 
            ...data,
            createdAt: data.createdAt?.toDate?.()?.toISOString() || data.createdAt,
          } as Blog 
        };
      }
      return { success: false, error: 'Blog not found' };
    } catch (error: any) {
      console.error('Get blog error:', error);
      return { success: false, error: error.message };
    }
  }, []);

  return { 
    blogs, 
    loading, 
    error, 
    addBlog, 
    updateBlog, 
    deleteBlog, 
    getBlogById,
    isEmpty: !loading && blogs.length === 0
  };
};