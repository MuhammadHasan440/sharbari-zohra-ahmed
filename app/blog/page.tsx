'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useBlogs } from "@/hooks/useBlogs";
import { 
  ArrowRight, BookOpen, PenTool, Globe, Compass, 
  Sparkles, Calendar, ChevronUp, ExternalLink, MessageSquare,
  Hash, Feather, Heart, Users, Star, Zap 
} from "lucide-react";

export default function BlogPage() {
  const { blogs, loading, error } = useBlogs();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedEssays, setExpandedEssays] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleEssay = (id: string) => {
    setExpandedEssays(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const topics = [
    { id: "all", title: "All Topics", icon: Hash, count: `${blogs.length}+` },
    { id: "writing", title: "Writing & Craft", icon: Feather, count: "20+" },
    { id: "identity", title: "Identity & Heritage", icon: Heart, count: "15+" },
    { id: "diaspora", title: "Diasporic Longing", icon: Compass, count: "10+" },
    { id: "faith", title: "Faith & Spirituality", icon: Star, count: "8+" },
    { id: "craft", title: "Creative Process", icon: Zap, count: "12+" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAF4]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#B7C83E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#5F6148]">Loading essays...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAF4]">
        <div className="text-center">
          <p className="text-red-500">Error loading blogs: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF4] text-[#2E2F1F]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap');
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }
        
        .font-subheading {
          font-family: 'Cormorant Garamond', serif;
        }
        
        body {
          font-family: 'Lora', serif;
        }

        html {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem;
            line-height: 1.2;
          }
          
          h2 {
            font-size: 1.8rem;
            line-height: 1.3;
          }
          
          .container-padding {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media (min-width: 769px) {
          .container-padding {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .max-w-content {
            max-width: 1200px;
            margin: 0 auto;
          }
        }

        .transition-all {
          transition: all 0.3s ease;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <Header />

      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 w-full"
                 style={{
                   background: 'linear-gradient(135deg, #2E2F1F 0%, #2E2F1F 40%, #B7C83E 100%)',
                 }}>
          <div className="absolute top-0 left-0 right-0 h-1 'bg-gradient-to-r' from-transparent via-[#B7C83E] to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] opacity-3 pointer-events-none"></div>
          
          <div className="container-padding max-w-content">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-[#E3E7C8]">
                  <PenTool size={14} className="text-[#B7C83E]" />
                  <p className="font-subheading text-xs text-[#B7C83E] tracking-widest">
                    ESSAYS & REFLECTIONS
                  </p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Underdog Energy 
                <br />
                <span className="text-[#B7C83E]">+ Substack</span>
              </h1>

              <div className="relative my-6">
                <div className="h-px 'bg-gradient-to-r' from-transparent via-[#B7C83E] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#B7C83E] rotate-45 bg-white"></div>
              </div>

              <p className="font-subheading text-lg md:text-xl text-white/90 leading-relaxed px-2 max-w-2xl mx-auto">
                Reflections on writing, identity, film, faith, creativity, and diasporic life.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
                {[
                  { value: `${blogs.length}+`, label: "Essays Published" },
                  { value: "5k+", label: "Readers" },
                  { value: "100%", label: "Free Content" },
                  { value: "9", label: "Categories" }
                ].map((stat, idx) => (
                  <div key={idx} className="p-3 bg-[#2E2F1F]/20 border border-[#E3E7C8] rounded-lg">
                    <p className="text-xl md:text-2xl font-bold text-[#B7C83E]">{stat.value}</p>
                    <p className="text-xs text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Essays Section */}
        <section className="py-8 md:py-12 container-padding max-w-content">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 'bg-gradient-to-br' from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2E2F1F]">All Essays</h2>
                <div className="h-1 w-16 'bg-gradient-to-r' from-[#B7C83E] to-transparent mt-1"></div>
              </div>
            </div>

            {blogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#5F6148]">No essays published yet. Check back soon!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {blogs
                  .filter(article => activeCategory === "all" || article.category === activeCategory)
                  .map((article) => {
                    const isExpanded = expandedEssays[article.id];
                    const IconComponent = article.title.includes("Lights") ? Globe :
                                        article.title.includes("Half") ? PenTool :
                                        article.title.includes("Heroes") ? Sparkles :
                                        article.title.includes("Count") ? PenTool :
                                        article.title.includes("Illusion") ? Compass :
                                        article.title.includes("Giants") ? Sparkles :
                                        article.title.includes("Water") ? PenTool :
                                        article.title.includes("Note") ? Compass :
                                        article.title.includes("Tribute") ? Sparkles : PenTool;
                    
                    return (
                      <article
                        key={article.id}
                        className={`relative p-5 md:p-6 'bg-gradient-to-br' from-[#F9FAF4] to-white border rounded-xl transition-all hover:shadow-lg ${
                          article.featured ? 'border-[#B7C83E] shadow-lg' : 'border-[#E3E7C8]'
                        }`}
                      >
                        {article.featured && (
                          <div className="absolute top-2 right-2 px-2 py-1 'bg-gradient-to-r' from-[#B7C83E] to-[#6F7F1E] rounded-full border border-[#E3E7C8]">
                            <p className="text-xs font-bold text-[#2E2F1F]">FEATURED</p>
                          </div>
                        )}

                        <div className="flex items-start gap-3 md:gap-4 mb-4">
                          <div className={`w-10 h-10 md:w-12 md:h-12 'bg-gradient-to-br' ${article.color} rounded-lg flex items-center justify-center shrink-0 border border-[#E3E7C8]`}>
                            <IconComponent className="text-white" size={18} />
                          </div>

                          <div className="space-y-2 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2 py-0.5 bg-[#D9E6A3]/30 text-[#5F6148] text-xs rounded-full">
                                Essay
                              </span>
                              <div className="flex items-center gap-1 text-[#5F6148] text-xs">
                                <Calendar size={10} />
                                <span>{article.date}</span>
                              </div>
                              <div className="text-xs text-[#B7C83E] font-medium">
                                {article.readTime}
                              </div>
                            </div>

                            <h3 className="text-base md:text-lg font-bold text-[#2E2F1F]">
                              {article.title}
                            </h3>
                          </div>
                        </div>

                        <div className="text-sm text-[#5F6148] space-y-3">
                          <p className={!isExpanded ? "line-clamp-3" : ""}>
                            {isExpanded ? article.content : article.preview}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#E3E7C8] flex flex-wrap gap-3 justify-between items-center">
    <button
      onClick={() => toggleEssay(article.id)}
      className="text-sm text-[#6F7F1E] hover:text-[#B7C83E] font-medium transition-colors flex items-center gap-1"
    >
      {isExpanded ? 'Show Less' : 'Read Full Essay'}
      <ArrowRight size={14} className={isExpanded ? 'rotate-90' : ''} />
    </button>

    {article.substackUrl && (
      <Link
        href={article.substackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-[#6F7F1E] hover:text-[#B7C83E] font-medium transition-colors"
      >
        Read on Substack
        <ExternalLink size={14} />
      </Link>
    )}
  </div>
                      </article>
                    );
                  })}
              </div>
            )}
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-12 w-full 'bg-gradient-to-b' from-[#F9FAF4] to-[#D9E6A3]">
          <div className="container-padding max-w-content">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 'bg-gradient-to-br' from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                  <PenTool size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2E2F1F]">Topics I Explore</h2>
                  <div className="h-1 w-16 'bg-gradient-to-r' from-[#B7C83E] to-transparent mt-1"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {topics.map((topic, index) => {
                  const TopicIcon = topic.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(topic.id)}
                      className={`p-4 rounded-lg border transition-all hover:shadow-md ${
                        activeCategory === topic.id
                          ? 'border-[#B7C83E] bg-linear-to-br from-[#F9FAF4] to-white shadow-sm'
                          : 'border-[#E3E7C8] bg-white hover:border-[#B7C83E]'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <TopicIcon size={20} className={activeCategory === topic.id ? 'text-[#B7C83E]' : 'text-[#5F6148]'} />
                          <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                            activeCategory === topic.id ? 'bg-[#B7C83E] scale-150' : 'bg-transparent'
                          }`}></div>
                        </div>
                        
                        <h3 className="font-bold text-[#2E2F1F] text-sm line-clamp-2">{topic.title}</h3>
                        
                        <p className="text-[#5F6148] text-xs">{topic.count} essays</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 w-full 'bg-gradient-to-br' from-[#F9FAF4] via-[#D9E6A3] to-[#F9FAF4] border-t border-[#E3E7C8]">
          <div className="container-padding max-w-content">
            <div className="text-center space-y-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto 'bg-gradient-to-br' from-[#B7C83E] to-[#6F7F1E] rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                  <MessageSquare size={28} className="text-white" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#2E2F1F]">
                  Subscribe to
                  <br />
                  <span className="text-[#6F7F1E]">My Newsletter</span>
                </h2>
                
                <p className="text-[#5F6148] font-subheading text-sm md:text-base">
                  Get essays about writing, identity, creativity, and diasporic life. Join a community of writers and storytelling enthusiasts.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="https://sharbariahmed.substack.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto px-8 py-4 'bg-gradient-to-r' from-[#B7C83E] to-[#6F7F1E] text-[#2E2F1F] font-medium rounded-lg hover:scale-105 transition-all text-center border border-[#E3E7C8]"
                >
                  Subscribe Now
                </Link>
                
                <div className="p-4 'bg-gradient-to-r' from-transparent via-[#D9E6A3]/30 to-transparent rounded-lg border border-[#E3E7C8]">
                  <p className="text-xs text-[#5F6148]">
                    New essays published regularly • Free content always • Unsubscribe anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Archive Preview */}
        <section className="py-12 container-padding max-w-content">
          <div className="space-y-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E2F1F]">
                Explore
                <br className="md:hidden" />
                <span className="text-[#6F7F1E]"> The Archive</span>
              </h2>
              <p className="text-[#5F6148] font-subheading max-w-2xl mx-auto md:mx-0">
                Years of writing on culture, creativity, and the human experience. All essays are free to read.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: BookOpen, title: "Latest Essays", desc: "Most recent reflections and insights" },
                { icon: Sparkles, title: "Popular Series", desc: "Multi-part essays and themed collections" },
                { icon: PenTool, title: "Writer's Notes", desc: "Behind-the-scenes of the creative process" }
              ].map((item, idx) => (
                <div key={idx} className="p-5 'bg-gradient-to-br' from-[#F9FAF4] to-white border border-[#E3E7C8] rounded-xl hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 'bg-gradient-to-br' from-[#D9E6A3] to-[#B7C83E]/20 rounded-lg flex items-center justify-center border border-[#E3E7C8]">
                      <item.icon size={18} className="text-[#5F6148]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#5F6148]">{item.title}</h3>
                      <p className="text-[#5F6148]/70 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="https://sharbariahmed.substack.com/archive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#B7C83E] text-[#B7C83E] rounded-lg hover:bg-linear-to-r hover:from-[#B7C83E] hover:to-[#6F7F1E] hover:text-[#2E2F1F] transition-all text-sm font-medium"
              >
                Browse Full Archive
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 w-12 h-12 'bg-gradient-to-br' from-[#B7C83E] to-[#6F7F1E] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all border border-[#E3E7C8]"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-[#2E2F1F]" />
        </button>
      )}
    </div>
  );
}