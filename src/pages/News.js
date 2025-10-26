import React, { useState } from 'react';
import { FaNewspaper, FaCalendarAlt, FaUser, FaArrowRight, FaTag, FaSearch } from 'react-icons/fa';
import './News.css';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All News' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'events', label: 'Events' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Annual General Meeting 2024 - Registration Now Open",
      excerpt: "We are pleased to announce that registration for our Annual General Meeting 2024 is now open. This year's meeting will be held on March 15th at the Lucknow Convention Center.",
      content: "We are pleased to announce that registration for our Annual General Meeting 2024 is now open. This year's meeting will be held on March 15th at the Lucknow Convention Center. The meeting will include discussions on our achievements from the past year, upcoming initiatives, and elections for new board members. All members are encouraged to attend and participate in shaping the future of our association.",
      category: 'announcements',
      author: 'Association Secretary',
      date: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 2,
      title: "Teaching Excellence Workshop - March 22nd",
      excerpt: "Join us for a comprehensive workshop on modern teaching methodologies, classroom management, and student engagement techniques.",
      content: "Join us for a comprehensive workshop on modern teaching methodologies, classroom management, and student engagement techniques. This workshop is designed specifically for our veteran teachers and will cover topics including digital teaching tools, differentiated instruction, and assessment strategies. The workshop will be held at the Kanpur Educational Institute on March 22nd from 9:00 AM to 5:00 PM.",
      category: 'events',
      author: 'Workshop Coordinator',
      date: '2024-02-10',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: false
    },
    {
      id: 3,
      title: "Member Spotlight: Col. Rajesh Kumar's Teaching Journey",
      excerpt: "Read about Colonel Rajesh Kumar's inspiring journey from military service to educational excellence.",
      content: "Colonel Rajesh Kumar (Retd.) has been a pillar of our association since its inception. After serving 25 years in the Indian Army, he transitioned to education and has been inspiring students with his unique blend of military discipline and academic excellence. His innovative teaching methods and commitment to student success have made him a role model for veteran teachers across the state.",
      category: 'achievements',
      author: 'Editorial Team',
      date: '2024-02-05',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: false
    },
    {
      id: 4,
      title: "New Digital Learning Resources Available",
      excerpt: "Access our updated collection of digital learning resources and teaching materials for veteran teachers.",
      content: "We are excited to announce the launch of our updated digital learning resource library. This comprehensive collection includes lesson plans, teaching materials, assessment tools, and professional development resources specifically designed for veteran teachers. All members can access these resources through our member portal.",
      category: 'education',
      author: 'Resource Team',
      date: '2024-01-28',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: false
    },
    {
      id: 5,
      title: "Patriotic Education Seminar - April 5th",
      excerpt: "Learn how to incorporate patriotic values and military history into your teaching curriculum effectively.",
      content: "Our upcoming Patriotic Education Seminar will focus on effective ways to incorporate patriotic values and military history into your teaching curriculum. The seminar will feature presentations from military historians, educational experts, and veteran teachers who have successfully integrated these themes into their classrooms. This event is open to all members and will be held at the Agra Military School on April 5th.",
      category: 'events',
      author: 'Event Coordinator',
      date: '2024-01-20',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: false
    },
    {
      id: 6,
      title: "Community Service Initiative - Teaching Underprivileged Children",
      excerpt: "Join our community service initiative to provide quality education to underprivileged children in rural areas.",
      content: "We are launching a new community service initiative aimed at providing quality education to underprivileged children in rural areas. This program will involve our veteran teachers volunteering their time and expertise to teach in rural schools and community centers. We believe that education is the key to empowerment and are committed to making a difference in the lives of these children.",
      category: 'announcements',
      author: 'Community Service Team',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: false
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="news">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">News & Updates</h1>
            <p className="hero-subtitle">
              Stay informed about the latest news, announcements, and updates from our association
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="search-section">
        <div className="container">
          <div className="search-filters">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <FaTag className="category-icon" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && (
        <section className="featured-section">
          <div className="container">
            <div className="featured-article">
              <div className="featured-image">
                <img src={featuredArticle.image} alt={featuredArticle.title} />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-content">
                <div className="article-meta">
                  <span className="article-category">{featuredArticle.category}</span>
                  <span className="article-date">
                    <FaCalendarAlt className="meta-icon" />
                    {formatDate(featuredArticle.date)}
                  </span>
                  <span className="article-author">
                    <FaUser className="meta-icon" />
                    {featuredArticle.author}
                  </span>
                </div>
                <h2 className="featured-title">{featuredArticle.title}</h2>
                <p className="featured-excerpt">{featuredArticle.excerpt}</p>
                <button className="btn btn-primary">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="news-section">
        <div className="container">
          <div className="news-grid">
            {regularNews.map(article => (
              <article key={article.id} className="news-card">
                <div className="news-image">
                  <img src={article.image} alt={article.title} />
                  <div className="news-category">{article.category}</div>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">
                      <FaCalendarAlt className="meta-icon" />
                      {formatDate(article.date)}
                    </span>
                    <span className="news-author">
                      <FaUser className="meta-icon" />
                      {article.author}
                    </span>
                  </div>
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-excerpt">{article.excerpt}</p>
                  <button className="btn btn-secondary">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="no-news">
              <FaNewspaper className="no-news-icon" />
              <h3>No articles found</h3>
              <p>Try adjusting your search criteria or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Stay Updated</h2>
            <p className="cta-description">
              Subscribe to our newsletter to receive the latest news, announcements, 
              and updates directly in your inbox.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
