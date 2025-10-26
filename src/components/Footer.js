import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaFlag,
  FaShieldAlt,
  FaShip,
  FaPlane
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/members', label: 'Members' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    { label: 'Army Veterans', icon: <FaShieldAlt /> },
    { label: 'Navy Veterans', icon: <FaShip /> },
    { label: 'Air Force Veterans', icon: <FaPlane /> }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <FaShieldAlt />
              </div>
              <div className="footer-logo-text">
                <h3>UPEX Teachers</h3>
                <p>Ex-Servicemen Association</p>
              </div>
            </div>
            <p className="footer-description">
              Connecting veteran teachers across Uttar Pradesh. We honor the service of our ex-servicemen 
              who continue to serve the nation through education.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-services">
              {services.map((service, index) => (
                <li key={index} className="service-item">
                  <span className="service-icon">{service.icon}</span>
                  {service.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@upexteachers.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} UP Ex-Servicemen Teacher Association. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
