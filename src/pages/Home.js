import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaUsers, FaCalendarAlt, FaGraduationCap, FaFlag } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    {
      id: 1,
      title: "Army Veterans Teaching",
      description: "Honoring our Army veterans who continue to serve through education",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      service: "Army"
    },
    {
      id: 2,
      title: "Navy Veterans Teaching",
      description: "Celebrating our Navy veterans shaping young minds",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      service: "Navy"
    },
    {
      id: 3,
      title: "Air Force Veterans Teaching",
      description: "Recognizing our Air Force veterans in educational leadership",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      service: "Air Force"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members", icon: <FaUsers /> },
    { number: "50+", label: "Events Organized", icon: <FaCalendarAlt /> },
    { number: "25+", label: "Years of Service", icon: <FaGraduationCap /> },
    { number: "15+", label: "Districts Covered", icon: <FaFlag /> }
  ];

  const features = [
    {
      icon: <FaUsers />,
      title: "Community Support",
      description: "Connect with fellow ex-servicemen teachers and build lasting relationships."
    },
    {
      icon: <FaCalendarAlt />,
      title: "Regular Events",
      description: "Participate in workshops, seminars, and social gatherings throughout the year."
    },
    {
      icon: <FaGraduationCap />,
      title: "Professional Development",
      description: "Access training programs and resources to enhance your teaching skills."
    },
    {
      icon: <FaFlag />,
      title: "Patriotic Values",
      description: "Promote national values and discipline in educational institutions."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">UP Ex-Servicemen Teacher Association</h1>
          <p className="hero-subtitle">
            Honoring our veterans who continue to serve the nation through education
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More <FaArrowRight />
            </Link>
            <Link to="/members" className="btn btn-secondary">
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="slider-section">
        <div className="container">
          <div className="slider-header">
            <h2 className="section-title">Our Veterans in Action</h2>
            <p className="section-subtitle">
              See how our ex-servicemen teachers are making a difference in education
            </p>
          </div>
          
          <div className="slider-container">
            <div className="slider-wrapper">
              {sliderImages.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="slide-overlay">
                    <div className="slide-content">
                      <div className="service-badge">{slide.service}</div>
                      <h3 className="slide-title">{slide.title}</h3>
                      <p className="slide-description">{slide.description}</p>
                      <Link to="/gallery" className="btn btn-gold">
                        View Gallery <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slider Controls */}
            <button className="slider-btn prev" onClick={prevSlide}>
              <FaArrowRight />
            </button>
            <button className="slider-btn next" onClick={nextSlide}>
              <FaArrowRight />
            </button>
            
            {/* Slider Indicators */}
            <div className="slider-indicators">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Join Our Association?</h2>
            <p className="section-subtitle">
              Discover the benefits of being part of our veteran teacher community
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Make a Difference?</h2>
            <p className="cta-description">
              Join our association and be part of a community that values service, 
              education, and patriotism.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us <FaArrowRight />
              </Link>
              <Link to="/events" className="btn btn-secondary">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
