import React, { useState } from 'react';
import { FaSearch, FaFilter, FaShieldAlt, FaShip, FaPlane, FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Members.css';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const members = [
    {
      id: 1,
      name: "Col. Rajesh Kumar (Retd.)",
      rank: "Colonel",
      service: "Army",
      subject: "Mathematics",
      experience: "25 years",
      location: "Lucknow",
      email: "rajesh.kumar@email.com",
      phone: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Served in the Indian Army for 25 years before transitioning to education. Specializes in advanced mathematics and physics."
    },
    {
      id: 2,
      name: "Cmdr. Priya Singh (Retd.)",
      rank: "Commander",
      service: "Navy",
      subject: "English Literature",
      experience: "22 years",
      location: "Kanpur",
      email: "priya.singh@email.com",
      phone: "+91 98765 43211",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Former Navy officer with expertise in English literature and communication skills. Passionate about developing students' language abilities."
    },
    {
      id: 3,
      name: "Wg. Cdr. Amit Sharma (Retd.)",
      rank: "Wing Commander",
      service: "Air Force",
      subject: "Physics",
      experience: "20 years",
      location: "Agra",
      email: "amit.sharma@email.com",
      phone: "+91 98765 43212",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Air Force veteran specializing in physics and aeronautics. Brings real-world aviation experience to the classroom."
    },
    {
      id: 4,
      name: "Maj. Sunita Verma (Retd.)",
      rank: "Major",
      service: "Army",
      subject: "History",
      experience: "18 years",
      location: "Varanasi",
      email: "sunita.verma@email.com",
      phone: "+91 98765 43213",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Army veteran with deep knowledge of Indian history and military history. Inspires students with stories of valor and sacrifice."
    },
    {
      id: 5,
      name: "Lt. Cdr. Vikram Joshi (Retd.)",
      rank: "Lieutenant Commander",
      service: "Navy",
      subject: "Chemistry",
      experience: "16 years",
      location: "Meerut",
      email: "vikram.joshi@email.com",
      phone: "+91 98765 43214",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Navy veteran specializing in chemistry and marine sciences. Uses naval engineering experience to make chemistry practical and engaging."
    },
    {
      id: 6,
      name: "Sqn. Ldr. Anjali Gupta (Retd.)",
      rank: "Squadron Leader",
      service: "Air Force",
      subject: "Biology",
      experience: "19 years",
      location: "Allahabad",
      email: "anjali.gupta@email.com",
      phone: "+91 98765 43215",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Air Force veteran with expertise in biology and environmental sciences. Combines military precision with scientific curiosity."
    }
  ];

  const services = ['all', 'Army', 'Navy', 'Air Force'];
  const subjects = ['all', 'Mathematics', 'English Literature', 'Physics', 'History', 'Chemistry', 'Biology'];

  const getServiceIcon = (service) => {
    switch (service) {
      case 'Army': return <FaShieldAlt />;
      case 'Navy': return <FaShip />;
      case 'Air Force': return <FaPlane />;
      default: return <FaGraduationCap />;
    }
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService = selectedService === 'all' || member.service === selectedService;
    const matchesSubject = selectedSubject === 'all' || member.subject === selectedSubject;
    
    return matchesSearch && matchesService && matchesSubject;
  });

  return (
    <div className="members">
      {/* Hero Section */}
      <section className="members-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Members</h1>
            <p className="hero-subtitle">
              Meet our distinguished ex-servicemen teachers who continue to serve through education
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
                placeholder="Search members by name, subject, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filters">
              <div className="filter-group">
                <FaFilter className="filter-icon" />
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="filter-select"
                >
                  {services.map(service => (
                    <option key={service} value={service}>
                      {service === 'all' ? 'All Services' : service}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <FaGraduationCap className="filter-icon" />
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="filter-select"
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>
                      {subject === 'all' ? 'All Subjects' : subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="results-info">
            <p>Showing {filteredMembers.length} of {members.length} members</p>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="members-section">
        <div className="container">
          <div className="members-grid">
            {filteredMembers.map(member => (
              <div key={member.id} className="member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="service-badge">
                    {getServiceIcon(member.service)}
                    <span>{member.service}</span>
                  </div>
                </div>
                
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-rank">{member.rank}</p>
                  <p className="member-subject">{member.subject}</p>
                  <p className="member-experience">{member.experience} of service</p>
                  
                  <div className="member-details">
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>{member.location}</span>
                    </div>
                    <div className="detail-item">
                      <FaEnvelope className="detail-icon" />
                      <span>{member.email}</span>
                    </div>
                    <div className="detail-item">
                      <FaPhone className="detail-icon" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredMembers.length === 0 && (
            <div className="no-results">
              <FaGraduationCap className="no-results-icon" />
              <h3>No members found</h3>
              <p>Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="join-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Join Our Community</h2>
            <p className="cta-description">
              Are you an ex-servicemen teacher? Join our association and connect with fellow veterans 
              who share your passion for education and service.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Join Us</a>
              <a href="/about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
