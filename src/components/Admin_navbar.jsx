import { Link } from "react-router-dom";
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

function Admin_navbar() {
  return (
    <BootstrapNavbar expand="lg" className="navbar-dark shadow-sm py-3 sticky-top" style={{ backgroundColor: '#0a0e17', borderBottom: '1px solid rgba(252, 163, 17, 0.4)' }}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/admin" className="fw-bolder text-warning d-flex align-items-center">
          <div className="bg-warning text-dark rounded d-flex align-items-center justify-content-center me-2 fw-bold" style={{ width: '35px', height: '35px' }}>
            A
          </div>
          <span style={{ letterSpacing: '1px' }}>ISS Admin Panel</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="admin-navbar-nav" />
        <BootstrapNavbar.Collapse id="admin-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link as={Link} to="/admin" className="text-white-50 hover-white small fw-bold text-uppercase tracking-wider">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/view" className="text-white-50 hover-white small fw-bold text-uppercase tracking-wider">View Products</Nav.Link>
            <Nav.Link as={Link} to="/add" className="text-white-50 hover-white small fw-bold text-uppercase tracking-wider">Add Product</Nav.Link>
            <Nav.Link as={Link} to="/update" className="text-white-50 hover-white small fw-bold text-uppercase tracking-wider">Update Product</Nav.Link>
            <Nav.Link as={Link} to="/delete" className="text-white-50 hover-white small fw-bold text-uppercase tracking-wider">Delete Product</Nav.Link>
            <Nav.Link as={Link} to="/orders" className="text-white-50 hover-white small fw-bold text-uppercase tracking-wider">Orders</Nav.Link>
            <div className="d-none d-lg-block mx-2" style={{ height: '20px', width: '1px', backgroundColor: 'rgba(255,255,255,0.2)', alignSelf: 'center' }}></div>
            <Nav.Link as={Link} to="/" className="btn btn-outline-danger btn-sm px-3 fw-bold rounded-pill text-uppercase">Logout</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Admin_navbar;
