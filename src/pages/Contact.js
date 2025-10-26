import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: [
        "UP Ex-Servicemen Teacher Association",
        "123 Education Complex",
        "Lucknow, Uttar Pradesh 226001",
        "India"
      ]
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: [
        "+91 98765 43210",
        "+91 11 2345 6789",
        "Mon - Fri: 9:00 AM - 6:00 PM"
      ]
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: [
        "info@upexteachers.org",
        "secretary@upexteachers.org",
        "support@upexteachers.org"
      ]
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const quickLinks = [
    { label: "Join Our Association", path: "/members" },
    { label: "View Events", path: "/events" },
    { label: "Read News", path: "/news" },
    { label: "Browse Gallery", path: "/gallery" }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              Get in touch with us for any questions, suggestions, or to join our association
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="info-icon">{info.icon}</div>
                <h3 className="info-title">{info.title}</h3>
                <div className="info-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="info-detail">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2 className="form-title">Send us a Message</h2>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <FaUser className="label-icon" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <FaEnvelope className="label-icon" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      <FaPhone className="label-icon" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      <FaComment className="label-icon" />
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="events">Event Information</option>
                      <option value="support">General Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <FaComment className="label-icon" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="6"
                    placeholder="Please describe your inquiry or message..."
                    required
                  />
                </div>
                
                <div className="form-actions">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="form-success">
                    <p>Thank you for your message! We'll get back to you soon.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="map-container">
              <h3 className="map-title">Find Us</h3>
              <div className="map-placeholder">
                <div className="map-content">
                  <FaMapMarkerAlt className="map-icon" />
                  <p>Interactive Map</p>
                  <small>Lucknow, Uttar Pradesh, India</small>
                </div>
              </div>
              <div className="map-info">
                <p>
                  Our office is conveniently located in the heart of Lucknow, 
                  easily accessible by public transport and private vehicles.
                </p>
                <div className="map-directions">
                  <h4>Directions:</h4>
                  <ul>
                    <li>5 minutes from Lucknow Railway Station</li>
                    <li>10 minutes from Chaudhary Charan Singh Airport</li>
                    <li>Near Hazratganj Metro Station</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <div className="container">
          <div className="quick-links-content">
            <h2 className="quick-links-title">Quick Links</h2>
            <p className="quick-links-subtitle">
              Explore more of our website and services
            </p>
            <div className="quick-links-grid">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.path} className="quick-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
