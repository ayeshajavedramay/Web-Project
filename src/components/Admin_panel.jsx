import { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Admin_navbar from "./Admin_navbar";
import helmetImg from '../assets/images/safety_helmet.png';
import bootsImg from '../assets/images/safety_boots.png';
import vestImg from '../assets/images/reflective_vest.png';
import harnessImg from '../assets/images/safety_harness.png';
import gogglesImg from '../assets/images/safety_goggles.png';
import glovesImg from '../assets/images/safety_gloves.png';
import aboutImg from '../assets/images/about_image.png';

function Admin_panel() {
  const [products, setProducts] = useState([
    { id: 1, name: "Industrial Safety Helmet", category: "Head Protection", price: "Rs. 2,500", stock: 150, img: helmetImg },
    { id: 2, name: "Steel Toe Safety Boots", category: "Foot Protection", price: "Rs. 8,500", stock: 85, img: bootsImg },
    { id: 3, name: "High-Vis Reflective Vest", category: "Body Protection", price: "Rs. 1,200", stock: 300, img: vestImg },
    { id: 4, name: "Full Body Harness", category: "Fall Protection", price: "Rs. 12,000", stock: 40, img: harnessImg },
    { id: 5, name: "Safety Goggles", category: "Eye Protection", price: "Rs. 800", stock: 200, img: gogglesImg },
    { id: 6, name: "Cut Resistant Gloves", category: "Hand Protection", price: "Rs. 1,500", stock: 500, img: glovesImg }
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", stock: "" });

  const handleAddChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { ...newProduct, id: newId, img: aboutImg }]);
    alert("Product added successfully to state!");
    setNewProduct({ name: "", category: "", price: "", stock: "" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
      alert("Product deleted from state!");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Admin_navbar />
      <Container fluid className="flex-grow-1 p-4 fade-in-up">
        
        {/* Dashboard Stats */}
        <Row className="mb-4">
          <Col md={3}>
            <Card className="glass-card bg-dark text-white border-0 shadow-sm h-100" style={{ borderLeft: '4px solid #fca311' }}>
              <Card.Body>
                <h6 className="text-white-50 text-uppercase tracking-wider fw-bold">Total Products</h6>
                <h2 className="display-5 fw-bolder mb-0 text-warning">{products.length}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="glass-card bg-dark text-white border-0 shadow-sm h-100" style={{ borderLeft: '4px solid #0d6efd' }}>
              <Card.Body>
                <h6 className="text-white-50 text-uppercase tracking-wider fw-bold">Total Stock Items</h6>
                <h2 className="display-5 fw-bolder mb-0">1,275</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="glass-card bg-dark text-white border-0 shadow-sm h-100" style={{ borderLeft: '4px solid #198754' }}>
              <Card.Body>
                <h6 className="text-white-50 text-uppercase tracking-wider fw-bold">Pending Orders</h6>
                <h2 className="display-5 fw-bolder mb-0 text-success">14</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="glass-card bg-dark text-white border-0 shadow-sm h-100" style={{ borderLeft: '4px solid #dc3545' }}>
              <Card.Body>
                <h6 className="text-white-50 text-uppercase tracking-wider fw-bold">Low Stock Alerts</h6>
                <h2 className="display-5 fw-bolder mb-0 text-danger">1</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Static Products Table */}
          <Col lg={8} className="mb-4 mb-lg-0">
            <Card className="glass-card bg-dark border-0 shadow-lg h-100 rounded-4 overflow-hidden">
              <Card.Header className="bg-transparent border-secondary py-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold text-white">Current Inventory</h5>
                <Button as={Link} to="/add" variant="outline-warning" size="sm" className="fw-bold rounded-pill px-3">
                  + Full Add Page
                </Button>
              </Card.Header>
              <Card.Body className="p-0">
                <Table responsive hover variant="dark" className="m-0 align-middle">
                  <thead style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <tr>
                      <th className="py-3 ps-4 text-white-50 border-secondary">Image</th>
                      <th className="py-3 text-white-50 border-secondary">Product Name</th>
                      <th className="py-3 text-white-50 border-secondary">Category</th>
                      <th className="py-3 text-white-50 border-secondary">Price</th>
                      <th className="py-3 text-white-50 border-secondary">Stock</th>
                      <th className="py-3 text-white-50 border-secondary text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id} className="border-secondary">
                        <td className="ps-4 py-3">
                          <img src={product.img} alt={product.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }} />
                        </td>
                        <td className="fw-bold text-white">{product.name}</td>
                        <td className="text-white-50">{product.category}</td>
                        <td className="text-warning fw-bold">{product.price}</td>
                        <td>
                          <span className={`badge ${product.stock < 50 ? 'bg-danger' : 'bg-success'} rounded-pill`}>{product.stock} units</span>
                        </td>
                        <td className="text-center">
                          <Button as={Link} to="/update" variant="outline-light" size="sm" className="me-2 px-3 rounded-pill">Edit</Button>
                          <Button variant="outline-danger" size="sm" className="px-3 rounded-pill" onClick={() => handleDelete(product.id)}>Delete</Button>
                        </td>
                      </tr>
                    ))}
                    {products.length === 0 && (
                      <tr>
                        <td colSpan="6" className="text-center py-4 text-white-50">No products found. Add some!</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Quick Add Form (CRUD Embedded) */}
          <Col lg={4}>
            <Card className="glass-card bg-dark border-0 shadow-lg rounded-4 h-100">
              <Card.Header className="bg-transparent border-secondary py-3">
                <h5 className="mb-0 fw-bold text-white">Quick Add Product</h5>
              </Card.Header>
              <Card.Body className="p-4">
                <Form onSubmit={handleAddSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white-50 small fw-bold">Product Name</Form.Label>
                    <Form.Control type="text" name="name" value={newProduct.name} onChange={handleAddChange} placeholder="e.g. Ear Defenders" required className="py-2 px-3 rounded-3 shadow-sm text-dark" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white-50 small fw-bold">Category</Form.Label>
                    <Form.Control type="text" name="category" value={newProduct.category} onChange={handleAddChange} placeholder="e.g. Hearing Protection" required className="py-2 px-3 rounded-3 shadow-sm text-dark" />
                  </Form.Group>
                  <Row className="mb-4">
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label className="text-white-50 small fw-bold">Price</Form.Label>
                        <Form.Control type="text" name="price" value={newProduct.price} onChange={handleAddChange} placeholder="e.g. Rs. 3,000" required className="py-2 px-3 rounded-3 shadow-sm text-dark" />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label className="text-white-50 small fw-bold">Stock</Form.Label>
                        <Form.Control type="number" name="stock" value={newProduct.stock} onChange={handleAddChange} placeholder="e.g. 100" required className="py-2 px-3 rounded-3 shadow-sm text-dark" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="warning" type="submit" className="w-100 fw-bold py-2 rounded-pill text-dark shadow-sm">
                    Add Product Directly
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Admin_panel;
