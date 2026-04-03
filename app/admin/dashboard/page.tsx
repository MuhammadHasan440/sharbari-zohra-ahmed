'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useBlogs } from '@/hooks/useBlogs';
import { Toast } from '@/components/toast';
import { 
  Plus, 
  Edit, 
  Trash2, 
  LogOut, 
  Calendar,
  BookOpen,
  Star,
  ExternalLink,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  Eye,
  Clock,
  Tag,
  TrendingUp,
  Award
} from 'lucide-react';

export default function AdminDashboard() {
  const { user, loading: authLoading, logout } = useAuth();
  const { blogs, loading: blogsLoading, deleteBlog } = useBlogs();
  const router = useRouter();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFeatured, setFilterFeatured] = useState<'all' | 'featured' | 'normal'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const itemsPerPage = 5;

  // Handle redirect
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  // Filter blogs based on search and featured filter
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFeatured = filterFeatured === 'all' ? true :
                           filterFeatured === 'featured' ? blog.featured :
                           !blog.featured;
    return matchesSearch && matchesFeatured;
  });

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Statistics
  const totalBlogs = blogs.length;
  const featuredBlogs = blogs.filter(b => b.featured).length;
  const totalReadTime = blogs.reduce((acc, blog) => {
    const minutes = parseInt(blog.readTime) || 0;
    return acc + minutes;
  }, 0);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    
    setDeletingId(id);
    const result = await deleteBlog(id);
    
    if (result.success) {
      setToast({ message: 'Blog post deleted successfully!', type: 'success' });
    } else {
      setToast({ message: result.error || 'Failed to delete blog post', type: 'error' });
    }
    setDeletingId(null);
  };

  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAF4] to-[#D9E6A3]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#B7C83E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#5F6148] font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (blogsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAF4] to-[#D9E6A3]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#B7C83E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#5F6148] font-medium">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAF4] via-white to-[#D9E6A3]">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-[#2E2F1F] via-[#3A3B28] to-[#2E2F1F] border-b border-[#B7C83E]/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Admin Dashboard</h1>
              <p className="text-[#B7C83E] text-sm mt-1">Manage your blog posts and content</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/create"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] rounded-lg hover:scale-105 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                <Plus size={18} />
                New Blog
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 backdrop-blur-sm border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all font-medium"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-[#E3E7C8] p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#5F6148] font-medium">Total Blogs</p>
                <p className="text-3xl font-bold text-[#2E2F1F] mt-1">{totalBlogs}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#B7C83E]/20 to-[#6F7F1E]/20 rounded-xl flex items-center justify-center">
                <BookOpen className="text-[#B7C83E]" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E3E7C8] p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#5F6148] font-medium">Featured Posts</p>
                <p className="text-3xl font-bold text-[#2E2F1F] mt-1">{featuredBlogs}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                <Star className="text-yellow-500" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E3E7C8] p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#5F6148] font-medium">Total Read Time</p>
                <p className="text-3xl font-bold text-[#2E2F1F] mt-1">{totalReadTime} min</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                <Clock className="text-blue-500" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E3E7C8] p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#5F6148] font-medium">Engagement Rate</p>
                <p className="text-3xl font-bold text-[#2E2F1F] mt-1">+{Math.min(99, totalBlogs * 5)}%</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-green-500" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-[#E3E7C8] p-4 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6148]" size={18} />
              <input
                type="text"
                placeholder="Search blogs by title or excerpt..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 border border-[#E3E7C8] rounded-lg focus:outline-none focus:border-[#B7C83E] focus:ring-1 focus:ring-[#B7C83E] transition-colors text-[#2E2F1F] placeholder:text-[#5F6148]"
              />
            </div>
            
            <div className="flex gap-3">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setFilterFeatured('all');
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    filterFeatured === 'all' 
                      ? 'bg-[#B7C83E] text-[#2E2F1F] font-medium shadow-md' 
                      : 'bg-gray-100 text-[#5F6148] hover:bg-gray-200'
                  }`}
                >
                  <Filter size={16} />
                  All
                </button>
                <button
                  onClick={() => {
                    setFilterFeatured('featured');
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    filterFeatured === 'featured' 
                      ? 'bg-yellow-500 text-white font-medium shadow-md' 
                      : 'bg-gray-100 text-[#5F6148] hover:bg-gray-200'
                  }`}
                >
                  <Star size={16} />
                  Featured
                </button>
                <button
                  onClick={() => {
                    setFilterFeatured('normal');
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    filterFeatured === 'normal' 
                      ? 'bg-blue-500 text-white font-medium shadow-md' 
                      : 'bg-gray-100 text-[#5F6148] hover:bg-gray-200'
                  }`}
                >
                  <BookOpen size={16} />
                  Normal
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'list' 
                      ? 'bg-[#B7C83E] text-[#2E2F1F]' 
                      : 'bg-gray-100 text-[#5F6148] hover:bg-gray-200'
                  }`}
                >
                  <List size={20} />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-[#B7C83E] text-[#2E2F1F]' 
                      : 'bg-gray-100 text-[#5F6148] hover:bg-gray-200'
                  }`}
                >
                  <LayoutGrid size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog List/Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="bg-white rounded-xl border border-[#E3E7C8] p-12 text-center shadow-sm">
            <div className="w-24 h-24 bg-gradient-to-br from-[#D9E6A3] to-[#B7C83E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={40} className="text-[#6F7F1E]" />
            </div>
            <h3 className="text-2xl font-bold text-[#2E2F1F] mb-2">No blogs found</h3>
            <p className="text-[#5F6148] mb-6">
              {searchTerm ? 'No blogs match your search criteria' : 'Get started by creating your first blog post'}
            </p>
            <Link
              href="/admin/create"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] rounded-lg hover:scale-105 transition-all font-medium shadow-lg"
            >
              <Plus size={18} />
              Create First Blog
            </Link>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
            {paginatedBlogs.map((blog) => (
              <div
                key={blog.id}
                className={`bg-white rounded-xl border transition-all duration-300 hover:shadow-xl ${
                  blog.featured 
                    ? 'border-[#B7C83E] shadow-md hover:shadow-[#B7C83E]/20' 
                    : 'border-[#E3E7C8] hover:border-[#B7C83E]/50'
                } overflow-hidden group`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      {/* Badges */}
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        {blog.featured && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full font-medium shadow-sm">
                            <Star size={12} />
                            Featured
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#D9E6A3] text-[#5F6148] text-xs rounded-full">
                          <Calendar size={12} />
                          {blog.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#D9E6A3] text-[#5F6148] text-xs rounded-full">
                          <Clock size={12} />
                          {blog.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#D9E6A3] text-[#5F6148] text-xs rounded-full">
                          <Tag size={12} />
                          {blog.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-[#2E2F1F] mb-2 group-hover:text-[#B7C83E] transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                      
                      <p className="text-[#5F6148] text-sm mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/admin/edit/${blog.id}`}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                        >
                          <Edit size={16} />
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          disabled={deletingId === blog.id}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium disabled:opacity-50"
                        >
                          <Trash2 size={16} />
                          {deletingId === blog.id ? 'Deleting...' : 'Delete'}
                        </button>
                        <Link
                          href={blog.substackUrl}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 border-2 border-[#B7C83E] text-[#B7C83E] rounded-lg hover:bg-[#B7C83E] hover:text-[#2E2F1F] transition-all text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          View on Substack
                        </Link>
                      </div>
                    </div>
                    
                    {/* Color Gradient Box */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${blog.color} rounded-xl flex-shrink-0 border border-[#E3E7C8] shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full flex items-center justify-center">
                        <Eye size={24} className="text-white/70" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-[#E3E7C8] hover:border-[#B7C83E] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-all font-medium ${
                    currentPage === page
                      ? 'bg-[#B7C83E] text-[#2E2F1F] shadow-md'
                      : 'border border-[#E3E7C8] text-[#5F6148] hover:border-[#B7C83E]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-[#E3E7C8] hover:border-[#B7C83E] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
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