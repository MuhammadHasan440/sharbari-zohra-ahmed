import { Timestamp } from 'firebase/firestore';

export interface Blog {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  preview: string;
  content: string;
  readTime: string;
  color: string;
  featured: boolean;
  substackUrl: string;
  createdAt: Timestamp;
}

export interface BlogInput {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  preview: string;
  content: string;
  readTime: string;
  color: string;
  featured: boolean;
  substackUrl: string;
}