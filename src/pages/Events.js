import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaArrowRight, FaRegCalendarCheck } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual General Meeting 2024",
      date: "2024-03-15",
      time: "10:00 AM - 2:00 PM",
      location: "Lucknow Convention Center",
      description: "Join us for our annual general meeting where we'll discuss the year's achievements, upcoming initiatives, and elect new board members.",
      attendees: 150,
      type: "Meeting",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Teaching Excellence Workshop",
      date: "2024-03-22",
      time: "9:00 AM - 5:00 PM",
      location: "Kanpur Educational Institute",
      description: "A comprehensive workshop on modern teaching methodologies, classroom management, and student engagement techniques.",
      attendees: 75,
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Patriotic Education Seminar",
      date: "2024-04-05",
      time: "2:00 PM - 6:00 PM",
      location: "Agra Military School",
      description: "Learn how to incorporate patriotic values and military history into your teaching curriculum effectively.",
      attendees: 100,
      type: "Seminar",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Veterans Day Celebration 2023",
      date: "2023-11-11",
      time: "10:00 AM - 4:00 PM",
      location: "Varanasi Cultural Center",
      description: "A grand celebration honoring our veterans with cultural performances, speeches, and recognition ceremonies.",
      attendees: 200,
      type: "Celebration",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Digital Teaching Tools Workshop",
      date: "2023-10-15",
      time: "9:00 AM - 3:00 PM",
      location: "Meerut Technical Institute",
      description: "Hands-on workshop on using digital tools and platforms for effective online and hybrid teaching.",
      attendees: 60,
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Community Service Day",
      date: "2023-09-20",
      time: "8:00 AM - 6:00 PM",
      location: "Allahabad Orphanage",
      description: "A day dedicated to community service, teaching underprivileged children and providing educational support.",
      attendees: 45,
      type: "Service",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Meeting': return '#1a365d';
      case 'Workshop': return '#2d5016';
      case 'Seminar': return '#1e3a8a';
      case 'Celebration': return '#dc2626';
      case 'Service': return '#d4af37';
      default: return '#6b7280';
    }
  };

  const renderEvents = (events) => {
    return events.map(event => (
      <div key={event.id} className="event-card">
        <div className="event-image">
          <img src={event.image} alt={event.title} />
          <div className="event-type" style={{ backgroundColor: getEventTypeColor(event.type) }}>
            {event.type}
          </div>
        </div>
        
        <div className="event-content">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-description">{event.description}</p>
          
          <div className="event-details">
            <div className="event-detail">
              <FaCalendarAlt className="detail-icon" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="event-detail">
              <FaClock className="detail-icon" />
              <span>{event.time}</span>
            </div>
            <div className="event-detail">
              <FaMapMarkerAlt className="detail-icon" />
              <span>{event.location}</span>
            </div>
            <div className="event-detail">
              <FaUsers className="detail-icon" />
              <span>{event.attendees} attendees</span>
            </div>
          </div>
          
          <div className="event-actions">
            <button className="btn btn-primary">
              Register <FaArrowRight />
            </button>
            <button className="btn btn-secondary">
              View Details
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="events">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Events & Activities</h1>
            <p className="hero-subtitle">
              Stay connected with our community through regular events, workshops, and gatherings
            </p>
          </div>
        </div>
      </section>

      {/* Event Tabs */}
      <section className="events-tabs">
        <div className="container">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              <FaRegCalendarCheck className="tab-icon" />
              Upcoming Events
            </button>
            <button
              className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              <FaCalendarAlt className="tab-icon" />
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="events-section">
        <div className="container">
          <div className="events-grid">
            {activeTab === 'upcoming' ? renderEvents(upcomingEvents) : renderEvents(pastEvents)}
          </div>
          
          {activeTab === 'upcoming' && upcomingEvents.length === 0 && (
            <div className="no-events">
              <FaCalendarAlt className="no-events-icon" />
              <h3>No upcoming events</h3>
              <p>Check back soon for new events and activities</p>
            </div>
          )}
          
          {activeTab === 'past' && pastEvents.length === 0 && (
            <div className="no-events">
              <FaCalendarAlt className="no-events-icon" />
              <h3>No past events</h3>
              <p>Events will appear here once they are completed</p>
            </div>
          )}
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="calendar-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Stay Updated</h2>
            <p className="cta-description">
              Don't miss out on our events! Subscribe to our newsletter to receive updates 
              about upcoming workshops, meetings, and community activities.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Subscribe to Newsletter</button>
              <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
