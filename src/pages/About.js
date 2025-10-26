import React from 'react';
import { FaFlag, FaShieldAlt, FaShip, FaPlane, FaUsers, FaGraduationCap, FaHeart, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const timeline = [
    {
      year: "1998",
      title: "Foundation",
      description: "UP Ex-Servicemen Teacher Association was established with a vision to unite veteran teachers across Uttar Pradesh."
    },
    {
      year: "2005",
      title: "Recognition",
      description: "Received official recognition from the state government and established partnerships with educational institutions."
    },
    {
      year: "2010",
      title: "Expansion",
      description: "Expanded membership to include teachers from all three armed forces - Army, Navy, and Air Force."
    },
    {
      year: "2015",
      title: "Digital Platform",
      description: "Launched our first digital platform to connect members and share resources across districts."
    },
    {
      year: "2020",
      title: "Community Outreach",
      description: "Initiated community outreach programs to support underprivileged students and schools."
    },
    {
      year: "2024",
      title: "Modern Website",
      description: "Launched this modern website to better serve our members and promote our mission."
    }
  ];

  const values = [
    {
      icon: <FaFlag />,
      title: "Patriotism",
      description: "We instill love for the nation and respect for our armed forces in every student we teach."
    },
    {
      icon: <FaShieldAlt />,
      title: "Discipline",
      description: "Military discipline translates into classroom excellence and student success."
    },
    {
      icon: <FaHandshake />,
      title: "Service",
      description: "We continue to serve our nation through education, shaping future generations."
    },
    {
      icon: <FaHeart />,
      title: "Compassion",
      description: "We teach with empathy and understanding, recognizing each student's unique potential."
    }
  ];

  const leadership = [
    {
      name: "Col. Rajesh Kumar (Retd.)",
      position: "President",
      service: "Army",
      experience: "25 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Cmdr. Priya Singh (Retd.)",
      position: "Vice President",
      service: "Navy",
      experience: "22 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Wg. Cdr. Amit Sharma (Retd.)",
      position: "Secretary",
      service: "Air Force",
      experience: "20 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Our Association</h1>
            <p className="hero-subtitle">
              Connecting veteran teachers who continue to serve the nation through education
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <FaFlag />
              </div>
              <h3>Our Mission</h3>
              <p>
                To unite ex-servicemen teachers across Uttar Pradesh, fostering professional development, 
                community support, and continued service to the nation through education. We aim to 
                leverage military discipline and values to enhance educational outcomes and inspire 
                students to become responsible citizens.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">
                <FaShieldAlt />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading association of veteran teachers in India, recognized for excellence 
                in education, character building, and community service. We envision a future where 
                every student benefits from the unique perspective and values that ex-servicemen 
                teachers bring to the classroom.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">
                <FaHeart />
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, discipline, service, and excellence guide everything we do. We believe 
                in the power of education to transform lives and communities, and we are committed 
                to upholding the highest standards of teaching while instilling patriotic values 
                in our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our association and our teaching
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive support for our veteran teacher community
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaUsers />
              </div>
              <h3>Community Building</h3>
              <p>
                Connect with fellow ex-servicemen teachers, share experiences, and build lasting 
                professional relationships across different service branches.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaGraduationCap />
              </div>
              <h3>Professional Development</h3>
              <p>
                Access workshops, training programs, and resources to enhance your teaching skills 
                and stay updated with modern educational practices.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaShieldAlt />
              </div>
              <h3>Support Services</h3>
              <p>
                Benefit from our support network including career guidance, health initiatives, 
                and assistance programs for members and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Leadership</h2>
            <p className="section-subtitle">
              Meet the dedicated leaders who guide our association
            </p>
          </div>
          
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} />
                  <div className="service-badge">{leader.service}</div>
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">{leader.name}</h3>
                  <p className="leader-position">{leader.position}</p>
                  <p className="leader-experience">{leader.experience} of service</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key milestones in our association's history
            </p>
          </div>
          
          <div className="timeline">
            {timeline.map((event, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Join Our Mission</h2>
            <p className="cta-description">
              Become part of a community that values service, education, and patriotism. 
              Together, we can make a difference in the lives of students across Uttar Pradesh.
            </p>
            <div className="cta-buttons">
              <a href="/members" className="btn btn-primary">Join Us</a>
              <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
