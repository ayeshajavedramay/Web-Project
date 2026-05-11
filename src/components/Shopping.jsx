import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import helmetImg from '../assets/images/safety_helmet.png';
import bootsImg from '../assets/images/safety_boots.png';
import vestImg from '../assets/images/reflective_vest.png';
import harnessImg from '../assets/images/safety_harness.png';
import gogglesImg from '../assets/images/safety_goggles.png';
import glovesImg from '../assets/images/safety_gloves.png';

function Shopping() {
  const products = [
    {
      id: 1,
      name: "Industrial Safety Helmet",
      category: "Head Protection",
      price: "Rs. 2,500",
      img: helmetImg
    },
    {
      id: 2,
      name: "Steel Toe Safety Boots",
      category: "Foot Protection",
      price: "Rs. 8,500",
      img: bootsImg
    },
    {
      id: 3,
      name: "High-Vis Reflective Vest",
      category: "Body Protection",
      price: "Rs. 1,200",
      img: vestImg
    },
    {
      id: 4,
      name: "Full Body Harness",
      category: "Fall Protection",
      price: "Rs. 12,000",
      img: harnessImg
    },
    {
      id: 5,
      name: "Safety Goggles",
      category: "Eye Protection",
      price: "Rs. 800",
      img: gogglesImg
    },
    {
      id: 6,
      name: "Cut Resistant Gloves",
      category: "Hand Protection",
      price: "Rs. 1,500",
      img: glovesImg
    }
  ];

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Navbar />
      <Container className="flex-grow-1 py-5 fade-in-up">
        <div className="mb-5 text-center">
          <h1 className="display-4 fw-bolder text-white mb-3">Construction PPE Store</h1>
          <div className="mx-auto mb-4" style={{ height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px' }}></div>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
            Browse our complete catalog of industrial-grade safety equipment. Ensure compliance and protect your workforce.
          </p>
        </div>

        <Row>
          {products.map((product, idx) => (
            <Col lg={4} md={6} className={`mb-4 fade-in-up delay-${(idx % 3) + 1}`} key={product.id}>
              <Card className="h-100 product-card rounded-4 overflow-hidden text-white">
                <div className="product-img-wrapper" style={{ height: '220px' }}>
                  <Card.Img variant="top" src={product.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <Card.Body className="p-4 d-flex flex-column" style={{ background: '#1a2639' }}>
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark mb-3 px-2 py-1 rounded-1">{product.category}</span>
                    <Card.Title className="fw-bold fs-5 mb-0 text-white">{product.name}</Card.Title>
                  </div>
                  <h4 className="text-warning fw-bold mt-auto mb-4">{product.price}</h4>
                  <Button variant="outline-warning" className="w-100 rounded-pill fw-bold">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Shopping;
