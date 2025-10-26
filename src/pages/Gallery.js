import React, { useState } from 'react';
import { FaImages, FaVideo, FaDownload, FaShare, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Media', icon: <FaImages /> },
    { id: 'events', label: 'Events', icon: <FaImages /> },
    { id: 'workshops', label: 'Workshops', icon: <FaImages /> },
    { id: 'meetings', label: 'Meetings', icon: <FaImages /> },
    { id: 'videos', label: 'Videos', icon: <FaVideo /> }
  ];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'events',
      title: 'Annual General Meeting 2023',
      description: 'Our annual gathering of veteran teachers',
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2023-11-15'
    },
    {
      id: 2,
      type: 'image',
      category: 'workshops',
      title: 'Teaching Excellence Workshop',
      description: 'Professional development session for our members',
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2023-10-20'
    },
    {
      id: 3,
      type: 'image',
      category: 'meetings',
      title: 'Board Meeting',
      description: 'Strategic planning session with association leadership',
      url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2023-09-10'
    },
    {
      id: 4,
      type: 'video',
      category: 'videos',
      title: 'Veterans Day Celebration',
      description: 'Highlights from our Veterans Day celebration',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2023-11-11'
    },
    {
      id: 5,
      type: 'image',
      category: 'events',
      title: 'Community Service Day',
      description: 'Volunteering at local schools and orphanages',
      url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2023-08-15'
    },
    {
      id: 6,
      type: 'image',
      category: 'workshops',
      title: 'Digital Teaching Tools',
      description: 'Learning modern educational technology',
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2023-07-25'
    },
    {
      id: 7,
      type: 'image',
      category: 'events',
      title: 'Independence Day Celebration',
      description: 'Patriotic celebration with students and community',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2023-08-15'
    },
    {
      id: 8,
      type: 'video',
      category: 'videos',
      title: 'Member Testimonials',
      description: 'Hear from our members about their teaching journey',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: '2023-06-20'
    }
  ];

  const filteredMedia = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const openLightbox = (item, index) => {
    setSelectedMedia(item);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setLightboxIndex(0);
  };

  const nextMedia = () => {
    const nextIndex = (lightboxIndex + 1) % filteredMedia.length;
    setLightboxIndex(nextIndex);
    setSelectedMedia(filteredMedia[nextIndex]);
  };

  const prevMedia = () => {
    const prevIndex = lightboxIndex === 0 ? filteredMedia.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
    setSelectedMedia(filteredMedia[prevIndex]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Gallery</h1>
            <p className="hero-subtitle">
              Explore our collection of photos and videos from events, workshops, and community activities
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="gallery-filters">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredMedia.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(item, index)}
              >
                <div className="media-thumbnail">
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="media-overlay">
                    <div className="media-type">
                      {item.type === 'video' ? <FaVideo /> : <FaImages />}
                    </div>
                    <div className="media-actions">
                      <button className="action-btn" title="View">
                        <FaImages />
                      </button>
                      <button className="action-btn" title="Download">
                        <FaDownload />
                      </button>
                      <button className="action-btn" title="Share">
                        <FaShare />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="media-info">
                  <h3 className="media-title">{item.title}</h3>
                  <p className="media-description">{item.description}</p>
                  <p className="media-date">{formatDate(item.date)}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredMedia.length === 0 && (
            <div className="no-media">
              <FaImages className="no-media-icon" />
              <h3>No media found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            
            <button className="lightbox-nav prev" onClick={prevMedia}>
              <FaChevronLeft />
            </button>
            
            <button className="lightbox-nav next" onClick={nextMedia}>
              <FaChevronRight />
            </button>
            
            <div className="lightbox-media">
              {selectedMedia.type === 'video' ? (
                <iframe
                  src={selectedMedia.url}
                  title={selectedMedia.title}
                  frameBorder="0"
                  allowFullScreen
                />
              ) : (
                <img src={selectedMedia.url} alt={selectedMedia.title} />
              )}
            </div>
            
            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedMedia.title}</h3>
              <p className="lightbox-description">{selectedMedia.description}</p>
              <p className="lightbox-date">{formatDate(selectedMedia.date)}</p>
            </div>
          </div>
        </div>
      )}

      {/* Upload CTA */}
      <section className="upload-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Share Your Memories</h2>
            <p className="cta-description">
              Have photos or videos from our events? Share them with the community 
              and help us build our gallery collection.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Upload Media</button>
              <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
