import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaNewspaper, FaSearch, FaMobileAlt, FaGlobe , FaCode ,FaRoute, FaBootstrap, FaReact ,FaJsSquare ,FaCss3Alt} from 'react-icons/fa';

const About = () => {
  return (
    <Container className="py-5 mt-5">
      {/* Hero Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 fw-bold text-primary mb-3">About NewsFox</h1>
          <p className="lead text-muted">
            Your trusted source for the latest news from around the world
          </p>
        </Col>
      </Row>

      {/* Mission Section */}
      <Row className="mb-5">
        <Col md={8} className="mx-auto text-center">
          <div className="p-4 bg-light rounded-3">
            <h2 className="mb-4">Our Mission</h2>
            <p className="fs-5">
              NewsFox is dedicated to delivering accurate, timely, and comprehensive news coverage
              across various categories. We aim to keep you informed with a seamless reading
              experience on any device.
            </p>
          </div>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="g-4 mb-5">
        <h2 className="text-center mb-4">Key Features</h2>
        
        <Col md={3} sm={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <FaNewspaper className="text-primary mb-3" size={48} />
              <h5>Latest Headlines</h5>
              <p>Stay updated with breaking news and trending stories</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <FaSearch className="text-primary mb-3" size={48} />
              <h5>Smart Search</h5>
              <p>Find news articles with our powerful search functionality</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <FaMobileAlt className="text-primary mb-3" size={48} />
              <h5>Mobile Friendly</h5>
              <p>Responsive design that works on all devices</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <FaGlobe className="text-primary mb-3" size={48} />
              <h5>Global Coverage</h5>
              <p>News from multiple countries and languages</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Technology Stack */}
      <Row className="mb-5">
        <Col>
          <div className="p-4 bg-light rounded-3">
            <h2 className="text-center mb-4">Technology Stack</h2>
            <Row className="text-center">
              <Col md={2} sm={4} xs={6} className="mb-3">
                <div className="p-3 bg-white rounded shadow-sm">
                  <FaReact className="text-info mb-2" size={40} />
                  <p className="mt-2 mb-0">React</p>
                </div>
              </Col>
              <Col md={2} sm={4} xs={6} className="mb-3">
                <div className="p-3 bg-white rounded shadow-sm">
                  <FaJsSquare className="text-info mb-2" size={40} />
                  <p className="mt-2 mb-0">JavaScript</p>
                </div>
              </Col>

              <Col md={2} sm={4} xs={6} className="mb-3">
                <div className="p-3 bg-white rounded shadow-sm">
                  <FaBootstrap className="text-primary mb-2" size={40} />
                  <p className="mt-2 mb-0">Bootstrap</p>
                </div>
              </Col>

              <Col md={2} sm={4} xs={6} className="mb-3">
                <div className="p-3 bg-white rounded shadow-sm">
                  <FaRoute className="text-danger mb-2" size={40} />
                  <p className="mt-2 mb-0">React Router</p>
                </div>
              </Col>

              <Col md={2} sm={4} xs={6} className="mb-3">
                <div className="p-3 bg-white rounded shadow-sm">
                  <FaCode className="text-success mb-2" size={40} />
                  <p className="mt-2 mb-0">NewsAPI</p>
                </div>
              </Col>
              <Col md={2} sm={4} xs={6} className="mb-3">
                <div className="p-3 bg-white rounded shadow-sm">
                  <FaCss3Alt className="text-success mb-2" size={40} />
                  <p className="mt-2 mb-0">CSS</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      
      {/* Contact CTA */}
      <Row className="text-center py-4 bg-primary text-white rounded-3">
  <Col>
    <h3>Have questions or feedback?</h3>
    <p className="mb-4">We'd love to hear from you!</p>
    
    {/* Mailto Link as Button */}
    <a href="mailto:rajsinghh314@gmail.com" className="btn btn-light btn-lg px-4">
      Contact Us
    </a>
  </Col>
</Row>

    </Container>
  );
};

export default About;