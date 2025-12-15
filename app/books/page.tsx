"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, BookOpen, Star, ChevronUp, ExternalLink, Award, Filter, ChevronDown, Sparkles, Quote, Newspaper, FileText, Video, MessageSquare } from "lucide-react"

export default function BooksPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showFilters, setShowFilters] = useState(true)
  const [showMobileFilter, setShowMobileFilter] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowScrollTop(currentScrollY > 300)
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowFilters(false)
      } else {
        setShowFilters(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const books = [
    {
      id: 1,
      title: "The Strangest of Fruit",
      subtitle: "A Collection of Stories",
      description: "A powerful collection centered on migration, war, womanhood, and the haunting afterlives of history. These stories explore the fractures between cultures—and the fragile bonds that hold us together.",
      year: "2013",
      awards: ["Lambda Literary Award Finalist", "Asian American Literary Award Nominee"],
      links: [
        { 
          name: "Amazon", 
          url: "https://www.amazon.com/Strangest-Fruit-Collected-Stories/dp/B0FRW1688Q",
          color: "from-[#A39F3B] to-[#7C7A34]"
        },
        { 
          name: "Barnes & Noble", 
          url: "https://www.barnesandnoble.com/w/the-strangest-of-fruit-sharbari-ahmed/1148333148",
          color: "from-[#111111] to-[#374151]"
        },
        { 
          name: "ThriftBooks", 
          url: "https://www.thriftbooks.com/w/the-strangest-of-fruit-collected-stories/56953199/",
          color: "from-[#A39F3B] to-[#7C7A34]"
        },
      ],
      featured: true,
      image: "/images/fruit.jpeg",
      reviews: [
        {
          title: "Between Home and Elsewhere",
          source: "The Daily Star",
          url: "https://www.thedailystar.net/books-literature/news/between-home-and-elsewhere-4044341",
          excerpt: "A remarkable exploration of identity and belonging in Ahmed's collection."
        }
      ]
    },
    {
      id: 2,
      title: "Dust Under Her Feet",
      subtitle: "A Novel",
      description: "A compelling narrative that traces the journey of identity, displacement, and belonging. Set against the backdrop of cultural shifts, this novel explores the universal search for home and self.",
      year: "2018",
      awards: ["Critically Acclaimed Debut Novel", "Featured in New York Times Book Review"],
      links: [
        { 
          name: "Amazon", 
          url: "https://www.amazon.com/Dust-Under-Sharbari-Zohra-Ahmed/dp/9388754255",
          color: "from-[#A39F3B] to-[#7C7A34]"
        },
      ],
      featured: true,
      image: "/images/dust.jpg",
      reviews: [
        {
          title: "Book Review: Dust Under Her Feet",
          source: "Deccan Herald",
          url: "https://www.deccanherald.com/features/book-review-dust-under-her-feet-762959.html",
          excerpt: "A poignant exploration of history and personal journey."
        },
        {
          title: "How Sharbari Zohra Ahmed Brings History to Life",
          source: "Kitaab",
          url: "http://kitaab.org/2020/01/04/how-sharbari-zohra-ahmed-brings-history-to-life-in-dust-under-her-feet/",
          excerpt: "An insightful look at Ahmed's historical narrative techniques."
        },
        {
          title: "Debut as an Author with Dust Under Her Feet",
          source: "The Hindu",
          url: "https://www.thehindu.com/books/books-authors/sharbari-zohra-ahmed-debuts-as-an-author-with-the-book-dust-under-her-feet/article30266155.ece",
          excerpt: "Coverage of Ahmed's compelling debut novel."
        }
      ]
    },
    {
      id: 3,
      title: "The Ocean of Mrs. Nagai",
      subtitle: "A Novel",
      description: "A story of war, love, and unexpected tenderness—set in the aftermath of the 1971 Bangladesh Liberation War. Exploring themes of memory, loss, and reconciliation.",
      year: "2008",
      awards: ["Notable Book of the Year", "Featured in NYT Book Review"],
      links: [
        { 
          name: "Amazon eBook", 
          url: "https://www.amazon.com/Ocean-Mrs-Nagai-Stories-ebook/dp/B00CZKS2VW",
          color: "from-[#A39F3B] to-[#7C7A34]"
        },
        { 
          name: "Apple Books", 
          url: "https://books.apple.com/us/book/the-ocean-of-mrs-nagai/id123456789",
          color: "from-[#111111] to-[#374151]"
        }
      ],
      featured: false,
      image: "/images/ocean.jpg",
      reviews: [
        {
          title: "The Ocean of Mrs. Nagai: Stories",
          source: "World Literature Today",
          url: "https://worldliteraturetoday.org/2014/march/ocean-mrs-nagai-stories-sharbari-zohra-ahmed",
          excerpt: "A review of Ahmed's collection exploring place and transformation."
        },
        {
          title: "Place and Transformation: Four New Works",
          source: "Los Angeles Review of Books",
          url: "https://lareviewofbooks.org/article/place-and-transformation-four-new-works-of-south-asian-american-fiction",
          excerpt: "Feature review discussing Ahmed's work in context of South Asian American fiction."
        }
      ]
    },
  ]

  const publications = [
    {
      title: "Birds of Bengal",
      venue: "The Massachusetts Review",
      year: "2015",
      category: "short story",
      excerpt: "A story about migration and memory set in the Sundarbans."
    },
    {
      title: "The Distance Between Two Points",
      venue: "Granta Magazine",
      year: "2018",
      category: "essay",
      excerpt: "An exploration of diasporic identity and belonging."
    },
    {
      title: "Monsoon Letters",
      venue: "The Paris Review",
      year: "2020",
      category: "short story",
      excerpt: "Letters exchanged between sisters separated by continents."
    },
    {
      title: "Raisins Not Virgins",
      venue: "Film Quarterly",
      year: "2022",
      category: "screenplay excerpt",
      excerpt: "A sharp, funny look at love and faith in post-9/11 America."
    }
  ]

  const pressAndInterviews = [
    {
      title: "Quantico Writer Sharbari Ahmed on Perseverance, Identity & Life in the Writers' Room",
      source: "NBC News",
      url: "https://www.nbcnews.com/news/asian-america/quantico-writer-sharbari-ahmed-perseverance-identity-life-writers-room-n491216",
      date: "2016",
      type: "interview",
      excerpt: "Discussion about working as a writer in Hollywood and representing diverse voices."
    },
    {
      title: "We were originally Hindus, says Bangladeshi author Sharbari Zohra Ahmed",
      source: "The Hindu",
      url: "https://www.thehindu.com/books/books-authors/we-were-originally-hindus-says-bangladeshi-author-sharbari-zohra-ahmed/article30449150.ece",
      date: "2020",
      type: "interview",
      excerpt: "Conversation about identity, heritage, and writing about complex histories."
    },
    {
      title: "Interview with Sharbari Ahmed",
      source: "The Aerogram",
      url: "https://theaerogram.com/interview-with-sharbari-ahmed/",
      date: "2015",
      type: "interview",
      excerpt: "Discussion about writing process and themes in Ahmed's work."
    }
  ]

  const articlesAndStories = [
    {
      title: "Author Page",
      source: "Shuddhashar Magazine",
      url: "https://shuddhashar.com/author/sharbari-ahmed/",
      description: "Collection of articles and essays published in Shuddhashar Magazine"
    },
    {
      title: "Noor: Embers and Ash",
      source: "Philadelphia Review of Books",
      url: "https://pbqmag.org/sharbari-ahmed-noor-embers-and-ash/",
      description: "Short story exploring themes of loss and memory"
    },
    {
      title: "Additional Works",
      source: "Archive",
      url: "#", // Changed from invalid Google Drive URL
      description: "Archive of unpublished stories, essays, and works in progress"
    }
  ]

  const filters = [
    { id: "all", label: "All Books", count: 3 },
    { id: "featured", label: "Featured", count: 2 },
    { id: "publications", label: "Publications", count: 4 },
    { id: "press", label: "Press & Interviews", count: 3 }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Lato:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Lora:wght@400;500;600;700&display=swap');
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }
        
        .font-subheading {
          font-family: 'Inter', sans-serif;
        }
        
        .font-italic {
          font-family: 'EB Garamond', serif;
        }
        
        body {
          font-family: 'Lora', serif;
        }

        .text-gradient {
          background: linear-gradient(135deg, #A39F3B 0%, #7C7A34 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
        }

        .hover-scale:hover {
          transform: scale(1.02);
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
            line-height: 1.2;
          }
          
          h2 {
            font-size: 2rem;
            line-height: 1.3;
          }
          
          .mobile-padding {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .mobile-full-width {
            margin-left: -1rem;
            margin-right: -1rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        .tap-highlight-transparent {
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <Header />

      <main className="flex-1 pb-24 lg:pb-0">
        {/* Hero Section */}
        <section 
          className="relative pt-16 pb-12 mobile-full-width"
          style={{
            background: 'linear-gradient(135deg, #111111 0%, #111111 40%, #A39F3B 100%)',
          }}
        >
            {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'url(/images/pattern.jpg)',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover',
          }}></div>
          
          <div className="mobile-padding">
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-[#A39F3B]/30">
                  <BookOpen size={14} className="text-[#A39F3B]" />
                  <p className="font-subheading text-xs text-[#A39F3B] tracking-widest">
                    LITERARY WORKS & PRESS
                  </p>
                </div>
              </div>
         
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                My
                <br />
                <span className="text-gradient">Books & Press</span>
              </h1>

              <div className="relative my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#A39F3B] to-transparent"></div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-[#A39F3B] rotate-45 bg-white"></div>
              </div>

              <p className="font-italic text-lg text-white/90 leading-relaxed px-2 max-w-2xl mx-auto">
                Stories that explore the fractures between cultures, the weight of history, and human resilience.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mobile-padding py-4">
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#A39F3B]/10 to-transparent border border-[#A39F3B]/30 rounded-lg text-[#111111] hover:bg-gradient-to-r hover:from-[#A39F3B]/20 hover:to-transparent mobile-transition"
          >
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-[#A39F3B]" />
              <span className="font-medium">
                {filters.find(f => f.id === activeFilter)?.label}
              </span>
              <span className="px-2 py-0.5 bg-[#A39F3B]/20 text-[#7C7A34] text-xs rounded-full">
                {filters.find(f => f.id === activeFilter)?.count}
              </span>
            </div>
            <ChevronDown size={16} className={`mobile-transition ${showMobileFilter ? 'rotate-180' : ''}`} />
          </button>
          
          {showMobileFilter && (
            <div className="mt-2 bg-white border border-[#A39F3B]/20 rounded-lg shadow-lg overflow-hidden animate-fade-in-up">
              <div className="p-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => {
                      setActiveFilter(filter.id)
                      setShowMobileFilter(false)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg mobile-transition flex items-center justify-between ${activeFilter === filter.id ? 'bg-gradient-to-r from-[#A39F3B]/10 to-transparent text-[#7C7A34]' : 'text-[#111111]/70 hover:bg-[#A39F3B]/5'}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${activeFilter === filter.id ? 'bg-[#A39F3B]' : 'bg-[#111111]/20'}`}></span>
                      <span className="font-medium">{filter.label}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#A39F3B]/10 text-[#7C7A34] text-xs rounded-full">
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Filter Bar */}
        <div className={`hidden lg:block sticky top-16 z-30 mobile-transition ${showFilters ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="bg-white border-b border-[#A39F3B]/20 shadow-sm">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-4 py-3">
                <span className="font-subheading text-sm font-medium text-[#111111]/60">Filter by:</span>
                <div className="flex gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap mobile-transition ${activeFilter === filter.id ? 'bg-gradient-to-r from-[#A39F3B] to-[#7C7A34] text-white shadow-sm' : 'bg-gradient-to-r from-[#A39F3B]/10 to-transparent text-[#111111] hover:from-[#A39F3B]/20 hover:to-transparent'}`}
                    >
                      {filter.label}
                      <span className="ml-2 px-1.5 py-0.5 bg-white/20 text-xs rounded-full">
                        {filter.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="mobile-padding max-w-6xl mx-auto space-y-12 py-8 lg:py-12">
          {(activeFilter === "all" || activeFilter === "featured") && (
            <>
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#111111]">
                  Featured <span className="text-gradient">Books</span>
                </h2>
                <p className="text-[#111111]/70 max-w-2xl">
                  Award-winning novels and collections exploring identity, migration, and complex human relationships.
                </p>
              </div>

              <div className="space-y-8">
                {books
                  .filter(book => activeFilter === "all" || book.featured)
                  .map((book, index) => (
                    <div 
                      key={book.id}
                      className="bg-white rounded-2xl overflow-hidden border border-[#A39F3B]/10 shadow-lg hover-lift transition-all duration-300 group animate-fade-in-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="lg:flex">
                        <div className="lg:w-1/3 relative h-64 lg:h-auto">
                          <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          
                          <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                            <span className="text-sm font-semibold text-[#7C7A34]">{book.year}</span>
                          </div>
                          
                          {book.featured && (
                            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#A39F3B] to-[#7C7A34] rounded-full">
                              <span className="text-xs font-semibold text-white">FEATURED</span>
                            </div>
                          )}
                        </div>

                        <div className="lg:w-2/3 p-6 lg:p-8">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-[#111111] mb-1">{book.title}</h3>
                            <p className="font-italic text-[#A39F3B] text-sm italic">{book.subtitle}</p>
                          </div>

                          <p className="text-[#111111]/80 leading-relaxed mb-6">
                            {book.description}
                          </p>

                          {/* Reviews Section */}
                          {book.reviews && book.reviews.length > 0 && (
                            <div className="mb-6">
                              <button
                                onClick={() => toggleSection(`reviews-${book.id}`)}
                                className="flex items-center gap-2 mb-3 text-[#7C7A34] hover:text-[#A39F3B] transition-colors"
                              >
                                <Newspaper size={16} />
                                <h4 className="text-sm font-semibold">
                                  Reviews & Coverage
                                </h4>
                                <ChevronDown 
                                  size={14} 
                                  className={`transition-transform duration-200 ${expandedSections[`reviews-${book.id}`] ? 'rotate-180' : ''}`}
                                />
                              </button>
                              
                              {expandedSections[`reviews-${book.id}`] && (
                                <div className="space-y-3 mb-4 animate-fade-in-up">
                                  {book.reviews.map((review, i) => (
                                    <a
                                      key={i}
                                      href={review.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block p-3 bg-gradient-to-r from-[#A39F3B]/5 to-transparent border border-[#A39F3B]/20 rounded-lg hover:border-[#A39F3B]/30 transition-colors duration-200 group/review"
                                    >
                                      <div className="flex items-start justify-between mb-1">
                                        <h5 className="font-medium text-[#111111] group-hover/review:text-[#7C7A34] transition-colors">
                                          {review.title}
                                        </h5>
                                        <ExternalLink size={12} className="text-[#A39F3B]/60 group-hover/review:text-[#A39F3B]" />
                                      </div>
                                      <p className="text-xs text-[#111111]/60 mb-1">{review.source}</p>
                                      <p className="text-sm text-[#111111]/70">{review.excerpt}</p>
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          {book.awards.length > 0 && (
                            <div className="mb-6">
                              <div className="flex items-center gap-2 mb-3">
                                <Award size={16} className="text-[#A39F3B]" />
                                <h4 className="text-sm font-semibold text-[#7C7A34]">Awards & Recognition</h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {book.awards.map((award, i) => (
                                  <span 
                                    key={i}
                                    className="px-3 py-1 bg-gradient-to-r from-[#A39F3B]/10 to-transparent border border-[#A39F3B]/20 rounded-full text-xs text-[#7C7A34]"
                                  >
                                    {award}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="space-y-3">
                            <p className="text-sm font-medium text-[#7C7A34]">Available from:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {book.links.map((link, linkIndex) => (
                                <Link
                                  key={linkIndex}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`px-4 py-3 bg-gradient-to-r ${link.color} text-white rounded-lg border border-[#A39F3B]/20 hover:shadow-md hover-scale mobile-transition flex items-center justify-between group/link`}
                                >
                                  <span className="font-medium">{link.name}</span>
                                  <ExternalLink size={14} className="opacity-60 group-hover/link:opacity-100 group-hover/link:rotate-12 transition-transform duration-200" />
                                </Link>
                              ))}
                            </div>
                          </div>

                          {book.featured && (
                            <div className="mt-6 pt-6 border-t border-[#A39F3B]/10">
                              <div className="flex items-start gap-2">
                                <Quote className="w-5 h-5 text-[#A39F3B]/40 flex-shrink-0 mt-1" />
                                <blockquote className="text-sm text-[#111111]/70 italic">
                                  {book.title === "The Strangest of Fruit" 
                                    ? "A remarkable debut collection... Ahmed writes with both precision and poetic grace about the complexities of identity and belonging."
                                    : "A compelling narrative that captures the essence of displacement and the universal search for home with remarkable sensitivity."
                                  }
                                </blockquote>
                              </div>
                              <p className="text-xs text-[#111111]/50 mt-2 ml-7">
                                {book.title === "The Strangest of Fruit" 
                                  ? "— Publishers Weekly"
                                  : "— Literary Review"
                                }
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}

          {/* Press & Interviews Section */}
          {(activeFilter === "all" || activeFilter === "press") && (
            <div className="pt-8 border-t border-[#A39F3B]/10">
              <div className="space-y-8 animate-fade-in-up">
                <div className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#111111]">
                    Press & <span className="text-gradient">Interviews</span>
                  </h2>
                  <p className="text-[#111111]/70 max-w-2xl">
                    Featured interviews and press coverage across major publications
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pressAndInterviews.map((item, i) => (
                    <div 
                      key={i}
                      className="p-5 bg-gradient-to-br from-white to-[#F9FAFB] border border-[#A39F3B]/20 rounded-lg hover:border-[#A39F3B]/30 hover-lift transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-[#A39F3B]/10 to-[#7C7A34]/10 rounded-lg">
                          {item.type === 'interview' ? (
                            <MessageSquare size={20} className="text-[#A39F3B]" />
                          ) : (
                            <Newspaper size={20} className="text-[#A39F3B]" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="text-lg font-bold text-[#111111] group-hover:text-[#7C7A34] transition-colors line-clamp-2">
                              {item.title}
                            </h4>
                            <ExternalLink size={14} className="text-[#A39F3B]/60 mt-1" />
                          </div>
                          <p className="text-sm text-[#A39F3B]">{item.source} • {item.date}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-[#111111]/70 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[#A39F3B] hover:text-[#7C7A34] transition-colors font-medium group/link"
                      >
                        Read {item.type === 'interview' ? 'Interview' : 'Article'}
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Additional Publications */}
          {(activeFilter === "all" || activeFilter === "publications") && (
            <div className="pt-8 border-t border-[#A39F3B]/10">
              <div className="space-y-8 animate-fade-in-up">
                <div className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#111111]">
                    Other <span className="text-gradient">Publications</span>
                  </h2>
                  <p className="text-[#111111]/70 max-w-2xl">
                    Featured stories and essays in literary journals and magazines
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {publications.map((pub, i) => (
                    <div 
                      key={i}
                      className="p-5 bg-gradient-to-br from-white to-[#F9FAFB] border border-[#A39F3B]/20 rounded-lg hover:border-[#A39F3B]/30 hover-lift transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-[#111111] group-hover:text-[#7C7A34] transition-colors">{pub.title}</h4>
                          <p className="text-sm text-[#A39F3B] mt-1">{pub.venue}</p>
                        </div>
                        <span className="px-2 py-1 bg-gradient-to-r from-[#A39F3B]/10 to-transparent text-[#7C7A34] text-xs font-medium rounded-full">
                          {pub.year}
                        </span>
                      </div>
                      
                      <p className="text-sm text-[#111111]/70 mb-4 italic line-clamp-2">
                        {pub.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-gradient-to-r from-[#A39F3B]/5 to-transparent border border-[#A39F3B]/20 text-[#7C7A34] text-xs rounded-full">
                          {pub.category}
                        </span>
                        <button className="text-sm text-[#A39F3B] hover:text-[#7C7A34] transition-colors flex items-center gap-1 group/link">
                          Read Excerpt
                          <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Articles & Stories Section - Always Visible */}
          <div className="pt-8 border-t border-[#A39F3B]/10">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#111111]">
                  Articles & <span className="text-gradient">Short Stories</span>
                </h2>
                <p className="text-[#111111]/70 max-w-2xl">
                  Additional writings, essays, and published short stories
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articlesAndStories.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target={item.url === "#" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className={`p-5 bg-gradient-to-br from-white to-[#F9FAFB] border border-[#A39F3B]/20 rounded-lg hover:border-[#A39F3B]/30 hover-lift transition-all duration-300 group ${item.url === "#" ? 'cursor-not-allowed opacity-70' : ''}`}
                    onClick={item.url === "#" ? (e) => e.preventDefault() : undefined}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-[#A39F3B]/10 to-[#7C7A34]/10 rounded-lg">
                        <FileText size={20} className="text-[#A39F3B]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#111111] group-hover:text-[#7C7A34] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#A39F3B]">{item.source}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-[#111111]/70 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#A39F3B] font-medium group-hover:text-[#7C7A34] transition-colors">
                        {item.url === "#" ? "Coming Soon" : "Read Now"}
                      </span>
                      {item.url !== "#" && <ExternalLink size={14} className="text-[#A39F3B]/60 group-hover:text-[#A39F3B]" />}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-12 mobile-full-width bg-gradient-to-br from-[#A39F3B]/8 via-[#7C7A34]/8 to-[#A39F3B]/8">
          <div className="mobile-padding max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#111111]">
                Explore
                <br />
                <span className="text-gradient">More Stories</span>
              </h2>
              <p className="text-[#111111]/70 font-subheading">
                Each book is a journey through identity, history, and human connection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#A39F3B] to-[#7C7A34] text-white font-subheading font-semibold rounded-full hover:shadow-[0_15px_40px_rgba(163,159,59,0.4)] transition-all duration-300 active:scale-95 touch-target hover-scale"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get in Touch
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              
              <Link
                href="/press"
                className="group w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#111111] text-[#111111] font-subheading font-semibold rounded-full hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-300 active:scale-95 touch-target hover-scale"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Press & Reviews
                  <ExternalLink size={20} />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="lg:hidden fixed bottom-20 right-4 z-40 w-12 h-12 bg-gradient-to-br from-[#A39F3B] to-[#7C7A34] rounded-full flex items-center justify-center shadow-lg tap-highlight-transparent hover-scale transition-transform duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-white" />
        </button>
      )}

      <div className="h-4 lg:hidden bg-transparent"></div>
    </div>
  )
}