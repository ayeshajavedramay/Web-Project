import { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    alert("Login successful! Check console for state.");
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Navbar />
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center py-5 fade-in-up">
        <Row className="w-100 justify-content-center">
          <Col md={6} lg={5}>
            <Card className="glass-card rounded-4 overflow-hidden border-0">
              <div className="text-center py-5 px-4 pb-0">
                <div className="mx-auto mb-3 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <i className="fs-3 text-dark">🔐</i>
                </div>
                <h3 className="fw-bolder m-0 text-white">Welcome Back</h3>
                <p className="mt-2 mb-0 text-white-50">Login to your ISS Account</p>
              </div>
              <Card.Body className="p-5">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-white-50 small text-uppercase tracking-wider">Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="py-3 rounded-3 border-secondary"
                      style={{ background: 'rgba(255,255,255,0.03)', color: 'white' }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <div className="d-flex justify-content-between">
                      <Form.Label className="fw-bold text-white-50 small text-uppercase tracking-wider">Password</Form.Label>
                      <a href="#" className="text-warning text-decoration-none small">Forgot?</a>
                    </div>
                    <Form.Control 
                      type="password" 
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="py-3 rounded-3 border-secondary"
                      style={{ background: 'rgba(255,255,255,0.03)', color: 'white' }}
                    />
                  </Form.Group>
                  <Button variant="warning" type="submit" className="w-100 fw-bold py-3 rounded-pill mt-4 text-dark shadow-sm">
                    Access Dashboard
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
