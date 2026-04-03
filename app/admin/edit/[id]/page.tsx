'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useBlogs } from '@/hooks/useBlogs';
import { Toast } from '@/components/toast';
import { 
  ArrowLeft, 
  Save, 
  FileText, 
  AlignLeft, 
  Eye, 
  Clock, 
  Tag, 
  Link as LinkIcon,
  Star,
  Palette,
  AlertCircle,
  CheckCircle,
  Trash2
} from 'lucide-react';
import Link from 'next/link';

const gradientOptions = [
  { value: 'from-[#B7C83E] to-[#6F7F1E]', name: 'Green Gradient', color1: '#B7C83E', color2: '#6F7F1E' },
  { value: 'from-[#2E2F1F] to-[#5F6148]', name: 'Dark Gradient', color1: '#2E2F1F', color2: '#5F6148' },
];

export default function EditBlog() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const { getBlogById, updateBlog, deleteBlog } = useBlogs();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  // Separate state for each field
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [preview, setPreview] = useState('');
  const [content, setContent] = useState('');
  const [readTime, setReadTime] = useState('');
  const [category, setCategory] = useState('essay');
  const [color, setColor] = useState(gradientOptions[0].value);
  const [featured, setFeatured] = useState(false);
  const [substackUrl, setSubstackUrl] = useState('');
  const [date, setDate] = useState('');

  // Handle auth redirect
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      if (!user || !id) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const result = await getBlogById(id);
        
        if (result.success && result.data) {
          setTitle(result.data.title || '');
          setExcerpt(result.data.excerpt || '');
          setPreview(result.data.preview || '');
          setContent(result.data.content || '');
          setReadTime(result.data.readTime || '');
          setCategory(result.data.category || 'essay');
          setColor(result.data.color || gradientOptions[0].value);
          setFeatured(result.data.featured || false);
          setSubstackUrl(result.data.substackUrl || '');
          setDate(result.data.date || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
          setIsDirty(false);
        } else {
          setError('Blog not found');
          setToast({ message: 'Blog not found', type: 'error' });
          setTimeout(() => router.push('/admin/dashboard'), 2000);
        }
      } catch (error: any) {
        console.error('Error fetching blog:', error);
        setError(error.message || 'Failed to load blog');
        setToast({ message: 'Failed to load blog', type: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [user, id, getBlogById, router]);

  // Mark form as dirty when any field changes
  useEffect(() => {
    if (!loading && title) {
      setIsDirty(true);
    }
  }, [title, excerpt, preview, content, readTime, category, color, featured, substackUrl]);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!title.trim()) errors.title = 'Title is required';
    if (!excerpt.trim()) errors.excerpt = 'Excerpt is required';
    if (!preview.trim()) errors.preview = 'Preview text is required';
    if (!content.trim()) errors.content = 'Content is required';
    if (!readTime.trim()) errors.readTime = 'Read time is required';
    if (!substackUrl.trim()) errors.substackUrl = 'Substack URL is required';
    else if (!/^https?:\/\/.+/.test(substackUrl)) errors.substackUrl = 'Please enter a valid URL';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToast({ message: 'Please fix the errors in the form', type: 'error' });
      return;
    }
    
    if (!isDirty) {
      setToast({ message: 'No changes to save', type: 'error' });
      return;
    }
    
    setSubmitting(true);
    setError(null);
    
    try {
      const updateData: any = {};
      
      if (title.trim()) updateData.title = title.trim();
      if (excerpt.trim()) updateData.excerpt = excerpt.trim();
      if (preview.trim()) updateData.preview = preview.trim();
      if (content.trim()) updateData.content = content.trim();
      if (readTime.trim()) updateData.readTime = readTime.trim();
      if (category.trim()) updateData.category = category.trim();
      if (color) updateData.color = color;
      updateData.featured = featured;
      if (substackUrl.trim()) updateData.substackUrl = substackUrl.trim();
      if (date) updateData.date = date;
      
      const result = await updateBlog(id, updateData);
      
      if (result.success) {
        setToast({ message: 'Blog post updated successfully!', type: 'success' });
        setIsDirty(false);
        setTimeout(() => router.push('/admin/dashboard'), 1500);
      } else {
        throw new Error(result.error || 'Failed to update blog post');
      }
    } catch (error: any) {
      console.error('Submit error:', error);
      setError(error.message || 'Failed to update blog post');
      setToast({ message: error.message || 'Failed to update blog post', type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) return;
    
    const result = await deleteBlog(id);
    
    if (result.success) {
      setToast({ message: 'Blog post deleted successfully!', type: 'success' });
      setTimeout(() => router.push('/admin/dashboard'), 1500);
    } else {
      setToast({ message: result.error || 'Failed to delete blog post', type: 'error' });
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAF4] to-[#D9E6A3]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#B7C83E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#5F6148] font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAF4] to-[#D9E6A3]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#B7C83E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#5F6148] font-medium">Loading blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAF4] via-white to-[#D9E6A3]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2E2F1F] via-[#3A3B28] to-[#2E2F1F] border-b border-[#B7C83E]/20 shadow-xl sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link
                href="/admin/dashboard"
                className="text-white/70 hover:text-[#B7C83E] transition-all p-2 rounded-lg hover:bg-white/10"
              >
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Edit Blog</h1>
                <p className="text-[#B7C83E] text-sm mt-1">Update your essay or reflection</p>
              </div>
            </div>
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 backdrop-blur-sm border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Indicator */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${isDirty ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
            <span className="text-[#5F6148]">
              {isDirty ? 'You have unsaved changes' : 'All changes saved'}
            </span>
          </div>
          <div className="text-xs text-[#5F6148] font-mono">
            Blog ID: {id}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
            <AlertCircle className="text-red-500 w-5 h-5 mt-0.5" />
            <div>
              <p className="text-red-600 font-medium">Error</p>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Form Card */}
          <div className="bg-white rounded-2xl border border-[#E3E7C8] shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#2E2F1F]/5 to-transparent px-6 py-4 border-b border-[#E3E7C8]">
              <h2 className="text-lg font-semibold text-[#2E2F1F] flex items-center gap-2">
                <FileText size={20} className="text-[#B7C83E]" />
                Blog Information
              </h2>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-[#2E2F1F] mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  key={`title-${id}`}
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (formErrors.title) setFormErrors({ ...formErrors, title: '' });
                  }}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all text-[#2E2F1F] placeholder:text-[#5F6148] bg-white ${
                    formErrors.title 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-[#E3E7C8] focus:border-[#B7C83E] focus:ring-[#B7C83E]/20'
                  }`}
                  placeholder="Enter blog title"
                />
                {formErrors.title && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {formErrors.title}
                  </p>
                )}
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-semibold text-[#2E2F1F] mb-2">
                  Excerpt <span className="text-red-500">*</span>
                </label>
                <textarea
                  key={`excerpt-${id}`}
                  value={excerpt}
                  onChange={(e) => {
                    setExcerpt(e.target.value);
                    if (formErrors.excerpt) setFormErrors({ ...formErrors, excerpt: '' });
                  }}
                  required
                  rows={2}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-[#2E2F1F] placeholder:text-[#5F6148] bg-white resize-none ${
                    formErrors.excerpt 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-[#E3E7C8] focus:border-[#B7C83E] focus:ring-[#B7C83E]/20'
                  }`}
                  placeholder="Short description shown in blog cards"
                />
                {formErrors.excerpt && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {formErrors.excerpt}
                  </p>
                )}
              </div>

              {/* Preview */}
              <div>
                <label className="block text-sm font-semibold text-[#2E2F1F] mb-2">
                  Preview Text <span className="text-red-500">*</span>
                </label>
                <textarea
                  key={`preview-${id}`}
                  value={preview}
                  onChange={(e) => {
                    setPreview(e.target.value);
                    if (formErrors.preview) setFormErrors({ ...formErrors, preview: '' });
                  }}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-[#2E2F1F] placeholder:text-[#5F6148] bg-white resize-none ${
                    formErrors.preview 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-[#E3E7C8] focus:border-[#B7C83E] focus:ring-[#B7C83E]/20'
                  }`}
                  placeholder="First few paragraphs shown before expanding"
                />
                {formErrors.preview && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {formErrors.preview}
                  </p>
                )}
              </div>

              {/* Full Content */}
              <div>
                <label className="block text-sm font-semibold text-[#2E2F1F] mb-2">
                  Full Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  key={`content-${id}`}
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                    if (formErrors.content) setFormErrors({ ...formErrors, content: '' });
                  }}
                  required
                  rows={14}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-[#2E2F1F] placeholder:text-[#5F6148] bg-white font-mono text-sm ${
                    formErrors.content 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-[#E3E7C8] focus:border-[#B7C83E] focus:ring-[#B7C83E]/20'
                  }`}
                  placeholder="Complete essay content..."
                />
                {formErrors.content && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {formErrors.content}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Settings Card */}
          <div className="bg-white rounded-2xl border border-[#E3E7C8] shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#2E2F1F]/5 to-transparent px-6 py-4 border-b border-[#E3E7C8]">
              <h2 className="text-lg font-semibold text-[#2E2F1F] flex items-center gap-2">
                <Eye size={20} className="text-[#B7C83E]" />
                Post Settings
              </h2>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Read Time & Category Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2E2F1F] mb-2">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-[#B7C83E]" />
                      Read Time <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    key={`readTime-${id}`}
                    value={readTime}
                    onChange={(e) => {
                      setReadTime(e.target.value);
                      if (formErrors.readTime) setFormErrors({ ...formErrors, readTime: '' });
                    }}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-[#2E2F1F] placeholder:text-[#5F6148] bg-white ${
                      formErrors.readTime 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-[#E3E7C8] focus:border-[#B7C83E] focus:ring-[#B7C83E]/20'
                    }`}
                    placeholder="e.g., 5 min read"
                  />
                  {formErrors.readTime && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {formErrors.readTime}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2E2F1F] mb-2">
                    <div className="flex items-center gap-2">
                      <Tag size={16} className="text-[#B7C83E]" />
                      Category
                    </div>
                  </label>
                  <input
                    type="text"
                    key={`category-${id}`}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-[#E3E7C8] rounded-lg focus:outline-none focus:border-[#B7C83E] focus:ring-2 focus:ring-[#B7C83E]/20 transition-colors text-[#2E2F1F] placeholder:text-[#5F6148] bg-white"
                    placeholder="essay"
                  />
                </div>
              </div>

              {/* Gradient Color Selection */}
              <div>
                <label className="block text-sm font-semibold text-[#2E2F1F] mb-3">
                  <div className="flex items-center gap-2">
                    <Palette size={16} className="text-[#B7C83E]" />
                    Gradient Color
                  </div>
                </label>
                <div className="flex gap-4">
                  {gradientOptions.map((gradient, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setColor(gradient.value)}
                      className="group relative"
                    >
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${gradient.value} rounded-xl border-2 transition-all ${
                          color === gradient.value 
                            ? 'border-[#B7C83E] ring-2 ring-[#B7C83E] ring-offset-2 scale-105 shadow-lg' 
                            : 'border-transparent hover:scale-105 hover:shadow-md'
                        }`}
                      />
                      <p className="text-xs text-center mt-2 text-[#5F6148] group-hover:text-[#2E2F1F] transition-colors">
                        {gradient.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Substack URL */}
              <div>
                <label className="block text-sm font-semibold text-[#2E2F1F] mb-2">
                  <div className="flex items-center gap-2">
                    <LinkIcon size={16} className="text-[#B7C83E]" />
                    Substack URL <span className="text-red-500">*</span>
                  </div>
                </label>
                <input
                  type="url"
                  key={`substackUrl-${id}`}
                  value={substackUrl}
                  onChange={(e) => {
                    setSubstackUrl(e.target.value);
                    if (formErrors.substackUrl) setFormErrors({ ...formErrors, substackUrl: '' });
                  }}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-[#2E2F1F] placeholder:text-[#5F6148] bg-white ${
                    formErrors.substackUrl 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-[#E3E7C8] focus:border-[#B7C83E] focus:ring-[#B7C83E]/20'
                  }`}
                  placeholder="https://..."
                />
                {formErrors.substackUrl && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {formErrors.substackUrl}
                  </p>
                )}
              </div>

              {/* Featured Checkbox */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-5 h-5 text-[#B7C83E] focus:ring-[#B7C83E] border-[#E3E7C8] rounded cursor-pointer"
                />
                <label htmlFor="featured" className="text-sm font-medium text-[#2E2F1F] cursor-pointer flex items-center gap-2">
                  <Star size={16} className={featured ? 'text-yellow-500' : 'text-gray-400'} />
                  Featured Post
                  <span className="text-xs text-[#5F6148] font-normal">(This post will be highlighted on the blog)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Link
              href="/admin/dashboard"
              className="px-6 py-3 border-2 border-[#E3E7C8] text-[#5F6148] rounded-xl hover:bg-gray-50 hover:border-[#B7C83E] transition-all font-medium"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting || !isDirty}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] rounded-xl hover:scale-105 transition-all font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#2E2F1F] border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}