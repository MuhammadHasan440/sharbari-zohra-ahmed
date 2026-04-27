import { Timestamp } from 'firebase/firestore';

// types/blog.ts
export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  color: string;
  substackUrl: string;
  createdAt: string;
  updatedAt?: string;
  authorId?: string;
  imageUrl?: string;
  tags?: string[];
  views?: number;
  likes?: number;
}

export interface BlogInput {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  featured?: boolean;
  color?: string;
  substackUrl?: string;
  imageUrl?: string;
  tags?: string[];
  createdAt?: any;
  updatedAt?: any;
}