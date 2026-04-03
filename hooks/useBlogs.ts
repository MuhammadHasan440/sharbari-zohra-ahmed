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
  Timestamp
} from 'firebase/firestore';
import { Blog, BlogInput } from '@/types/blog';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const blogsData = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data
          };
        }) as Blog[];
        setBlogs(blogsData);
        setLoading(false);
      },
      (err) => {
        console.error('Firestore error:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const addBlog = async (blogData: Omit<BlogInput, 'createdAt'>) => {
    try {
      const newBlog = {
        ...blogData,
        createdAt: Timestamp.now()
      };
      const docRef = await addDoc(collection(db, 'blogs'), newBlog);
      return { success: true, id: docRef.id };
    } catch (error: any) {
      console.error('Add blog error:', error);
      return { success: false, error: error.message };
    }
  };

  const updateBlog = async (id: string, blogData: Partial<BlogInput>) => {
    try {
      if (!id) {
        throw new Error('Blog ID is required');
      }

      const blogRef = doc(db, 'blogs', id);
      
      // Clean the update data - remove undefined values and ensure proper types
      const updateData: any = {};
      
      Object.keys(blogData).forEach(key => {
        const value = blogData[key as keyof BlogInput];
        if (value !== undefined && value !== null && value !== '') {
          updateData[key] = value;
        }
      });
      
      // Ensure featured is boolean
      if ('featured' in blogData) {
        updateData.featured = Boolean(blogData.featured);
      }
      
      console.log('Updating blog with ID:', id);
      console.log('Update data:', updateData);
      
      await updateDoc(blogRef, updateData);
      console.log('Blog updated successfully');
      return { success: true };
    } catch (error: any) {
      console.error('Update blog error:', error);
      return { success: false, error: error.message };
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      const blogRef = doc(db, 'blogs', id);
      await deleteDoc(blogRef);
      return { success: true };
    } catch (error: any) {
      console.error('Delete blog error:', error);
      return { success: false, error: error.message };
    }
  };

  const getBlogById = useCallback(async (id: string) => {
    try {
      if (!id) {
        throw new Error('Blog ID is required');
      }
      
      console.log('Fetching blog with ID:', id);
      const blogRef = doc(db, 'blogs', id);
      const blogDoc = await getDoc(blogRef);
      
      if (blogDoc.exists()) {
        const data = blogDoc.data();
        console.log('Blog data fetched successfully');
        return { 
          success: true, 
          data: { 
            id: blogDoc.id, 
            ...data,
            createdAt: data.createdAt
          } as Blog 
        };
      }
      return { success: false, error: 'Blog not found' };
    } catch (error: any) {
      console.error('Get blog error:', error);
      return { success: false, error: error.message };
    }
  }, []);

  return { blogs, loading, error, addBlog, updateBlog, deleteBlog, getBlogById };
};