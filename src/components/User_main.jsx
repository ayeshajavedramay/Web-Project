import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeAbout from './HomeAbout';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import heroBg1 from '../assets/images/hero_bg_1.png';
import heroBg2 from '../assets/images/hero_bg_2.png';
import heroBg3 from '../assets/images/hero_bg_3.png';
import helmetImg from '../assets/images/safety_helmet.png';
import bootsImg from '../assets/images/safety_boots.png';
import vestImg from '../assets/images/reflective_vest.png';

function User_main() {
  const [bgIndex, setBgIndex] = useState(0);
  const heroBackgrounds = [
    heroBg1,
    heroBg2,
    heroBg3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Industrial Safety Helmet",
      description: "High-density polyethylene shell with 4-point suspension for maximum impact protection.",
      price: "Rs. 2,500",
      img: helmetImg
    },
    {
      id: 2,
      name: "Steel Toe Safety Boots",
      description: "Slip-resistant, oil-resistant construction boots with reinforced steel toe caps.",
      price: "Rs. 8,500",
      img: bootsImg
    },
    {
      id: 3,
      name: "High-Vis Reflective Vest",
      description: "ANSI Class 2 compliant high-visibility yellow vest with reflective silver strips.",
      price: "Rs. 1,200",
      img: vestImg
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="text-white text-center py-5 d-flex align-items-center justify-content-center position-relative" 
        style={{ 
          minHeight: '85vh',
          backgroundImage: `url(${heroBackgrounds[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(circle, rgba(252,163,17,0.1) 0%, rgba(10,14,23,0.8) 100%)' }}></div>
        
        <Container className="position-relative fade-in-up" style={{ zIndex: 1 }}>
          <span className="badge bg-warning text-dark px-3 py-2 mb-4 rounded-pill fw-bold text-uppercase tracking-widest">Premium Safety Gear</span>
          <h1 className="display-2 fw-bolder mb-4 text-white">Protect What Matters</h1>
          <p className="lead mb-5 fs-4 mx-auto opacity-75" style={{ maxWidth: '800px' }}>
            International Safety Solution (ISS) provides top-grade, industrial-tested Personal Protective Equipment (PPE) for demanding construction sites.
          </p>
          <div className="fade-in-up delay-1">
            <Button as={Link} to="/shopping" variant="warning" size="lg" className="me-3 px-5 py-3 fw-bold rounded-pill text-dark shadow-lg">
              Explore Catalog <i className="ms-2">→</i>
            </Button>
            <Button as={Link} to="/about" variant="outline-light" size="lg" className="px-5 py-3 fw-bold rounded-pill" style={{ border: '2px solid rgba(255,255,255,0.2)' }}>
              Learn More
            </Button>
          </div>
        </Container>
      </div>

      <HomeAbout />
      <WhyChooseUs />

      {/* Featured Products */}
      <div className="py-5" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <Container className="py-5">
          <div className="text-center mb-5 fade-in-up delay-2">
            <h2 className="display-4 fw-bold text-white mb-3">Top Rated Equipment</h2>
            <div className="mx-auto" style={{ height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
          </div>
          
          <Row>
            {featuredProducts.map((product, idx) => (
              <Col md={4} className={`mb-4 fade-in-up delay-${(idx % 3) + 1}`} key={product.id}>
                <Card className="h-100 product-card rounded-4 overflow-hidden">
                  <div className="product-img-wrapper" style={{ height: '250px' }}>
                    <Card.Img variant="top" src={product.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <Card.Body className="p-4 d-flex flex-column" style={{ background: '#1a2639' }}>
                    <Card.Title className="fw-bold fs-4 mb-2 text-white">{product.name}</Card.Title>
                    <h5 className="text-warning fw-bold mb-3">{product.price}</h5>
                    <Card.Text className="text-white-50 flex-grow-1">
                      {product.description}
                    </Card.Text>
                    <Button as={Link} to="/shopping" variant="outline-warning" className="w-100 rounded-pill mt-3 fw-bold">
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Testimonials />
    </div>
  );
}

export default User_main;
