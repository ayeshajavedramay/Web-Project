import { useState } from 'react';
import Admin_navbar from "./Admin_navbar";
import Footer from "./Footer";
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';

function Delete_product() {
  const [productId, setProductId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Deleting Product ID:", productId);
    alert(`Product ID ${productId} deleted successfully!`);
    setProductId("");
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Admin_navbar />
      <Container className="flex-grow-1 py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="fw-bold mb-4 text-danger">Delete Product</h2>
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Product ID to Delete</Form.Label>
                    <Form.Control 
                      type="number" 
                      placeholder="Enter Product ID" 
                      value={productId} 
                      onChange={(e) => setProductId(e.target.value)} 
                      required 
                    />
                    <Form.Text className="text-muted">
                      Warning: This action cannot be undone.
                    </Form.Text>
                  </Form.Group>
                  <Button variant="danger" type="submit" className="w-100 fw-bold py-2">Delete Product</Button>
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

export default Delete_product;
