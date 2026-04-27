// types/blog.ts
export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  preview?: string; // ✅ Add this line
  content: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  color: string;
  substackUrl?: string; // Already optional
  createdAt: any;
  updatedAt?: any;
  authorId?: string;
  imageUrl?: string;
  tags?: string[];
  views?: number;
  likes?: number;
}

// Also update BlogInput
export interface BlogInput {
  title: string;
  excerpt: string;
  preview?: string; // ✅ Add this line
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