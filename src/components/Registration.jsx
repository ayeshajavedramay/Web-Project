import { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import heroBg1 from '../assets/images/hero_bg_1.png';

function Registration() {
  const [formData, setFormData] = useState({ 
    fullName: "", 
    username: "",
    email: "", 
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    country: "",
    profilePic: null,
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agreeTerms) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }
    console.log("Registration submitted:", formData);
    alert("Registration successful! Check console for state.");
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Navbar />
      <Container className="flex-grow-1 py-5 fade-in-up">
        <Row className="justify-content-center">
          <Col md={11} lg={10} xl={9}>
            <Card className="glass-card rounded-4 overflow-hidden border-0 shadow-lg">
              <Row className="g-0">
                {/* Left Side Branding */}
                <Col md={4} className="d-none d-md-flex flex-column justify-content-center align-items-center text-center p-5 position-relative" style={{ background: 'linear-gradient(135deg, rgba(252,163,17,0.9), rgba(252,163,17,0.7))', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${heroBg1})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2, mixBlendMode: 'overlay' }}></div>
                  <div className="position-relative z-1">
                    <h2 className="display-4 mb-3">🚧</h2>
                    <h3 className="fw-bolder text-dark mb-3">Join ISS</h3>
                    <p className="text-dark fw-bold mb-0">Create your account to access wholesale prices and premium safety equipment.</p>
                  </div>
                </Col>
                
                {/* Right Side Form */}
                <Col md={8} className="p-4 p-md-5">
                  <div className="text-center mb-4">
                    <h3 className="fw-bolder m-0 text-white display-6">Registration</h3>
                    <p className="text-white-50 mt-1">Please fill in your details to create an account</p>
                  </div>
                  
                  <Form onSubmit={handleSubmit}>
                    <h6 className="text-warning text-uppercase tracking-wider fw-bold mb-3 border-bottom border-secondary pb-2">Account Details</h6>
                    <Row className="mb-3">
                      <Col sm={6} className="mb-3 mb-sm-0">
                        <Form.Group>
                          <Form.Label className="text-white-50 small fw-bold">Full Name</Form.Label>
                          <Form.Control type="text" name="fullName" placeholder="e.g. John Doe" value={formData.fullName} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm" />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="text-white-50 small fw-bold">Username</Form.Label>
                          <Form.Control type="text" name="username" placeholder="e.g. johndoe99" value={formData.username} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col sm={6} className="mb-3 mb-sm-0">
                        <Form.Group>
                          <Form.Label className="text-white-50 small fw-bold">Email Address</Form.Label>
                          <Form.Control type="email" name="email" placeholder="e.g. name@company.com" value={formData.email} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm" />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="text-white-50 small fw-bold">Phone Number</Form.Label>
                          <Form.Control type="tel" name="phone" placeholder="e.g. +92 300 1234567" value={formData.phone} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col sm={6} className="mb-3 mb-sm-0">
                        <Form.Group>
                          <Form.Label className="text-white-50 small fw-bold">Password</Form.Label>
                          <Form.Control type="password" name="password" placeholder="Create a strong password" value={formData.password} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm" />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="text-white-50 small fw-bold">Confirm Password</Form.Label>
                          <Form.Control type="password" name="confirmPassword" placeholder="Re-enter password" value={formData.confirmPassword} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <h6 className="text-warning text-uppercase tracking-wider fw-bold mb-3 border-bottom border-secondary pb-2">Personal & Location</h6>
                    <Row className="mb-3">
                      <Col sm={6} className="mb-3 mb-sm-0">
                        <Form.Group>
                          <Form.Label className="text-white-50 small fw-bold">Date of Birth</Form.Label>
                          <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm" />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="text-white-50 small fw-bold">Gender</Form.Label>
                          <Form.Select name="gender" value={formData.gender} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm">
                            <option value="">Select Gender...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-white-50 small fw-bold">Full Address</Form.Label>
                      <Form.Control type="text" name="address" placeholder="e.g. 123 Industrial Estate, Block B" value={formData.address} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm" />
                    </Form.Group>
                    <Row className="mb-4">
                      <Col sm={6} className="mb-3 mb-sm-0">
                        <Form.Group>
                          <Form.Label className="text-white-50 small fw-bold">City</Form.Label>
                          <Form.Control type="text" name="city" placeholder="e.g. Lahore" value={formData.city} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm" />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="text-white-50 small fw-bold">Country</Form.Label>
                          <Form.Control type="text" name="country" placeholder="e.g. Pakistan" value={formData.country} onChange={handleChange} required className="py-2 px-3 rounded-3 shadow-sm" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <h6 className="text-warning text-uppercase tracking-wider fw-bold mb-3 border-bottom border-secondary pb-2">Profile Picture (Optional)</h6>
                    <Form.Group className="mb-4">
                      <Form.Control type="file" name="profilePic" onChange={handleChange} accept="image/*" className="py-2 px-3 rounded-3 shadow-sm" />
                    </Form.Group>

                    <Form.Check 
                      type="checkbox" 
                      id="agreeTerms" 
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      label={<span className="text-white-50 ms-1 small">I agree to the <a href="#" className="text-warning">Terms & Conditions</a></span>}
                      className="mb-4"
                      required
                    />

                    <Button variant="warning" type="submit" className="w-100 fw-bold py-3 rounded-pill text-dark shadow-lg fs-5" style={{ transition: 'all 0.3s' }}>
                      Register Account
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Registration;
