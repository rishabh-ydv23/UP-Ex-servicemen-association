import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaFlag, FaShieldAlt, FaPlane, FaShip } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <FaFlag /> },
    { path: '/about', label: 'About Us', icon: <FaShieldAlt /> },
    { path: '/members', label: 'Members', icon: <FaShip /> },
    { path: '/events', label: 'Events', icon: <FaPlane /> },
    { path: '/gallery', label: 'Gallery', icon: <FaFlag /> },
    { path: '/news', label: 'News', icon: <FaShieldAlt /> },
    { path: '/contact', label: 'Contact', icon: <FaShip /> }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">
              <FaShieldAlt />
            </div>
            <div className="logo-text">
              <span className="logo-title">UPEX Teachers</span>
              <span className="logo-subtitle">Ex-Servicemen Association</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-mobile-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-mobile-item">
                <Link
                  to={item.path}
                  className={`nav-mobile-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="nav-mobile-icon">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
