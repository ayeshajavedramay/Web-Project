import { Link } from "react-router-dom";
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" className="navbar-dark shadow-sm py-3 sticky-top" style={{ backgroundColor: 'rgba(10, 14, 23, 0.95)', borderBottom: '1px solid rgba(252, 163, 17, 0.2)' }}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bolder text-white d-flex align-items-center">
          <div className="bg-warning text-dark rounded d-flex align-items-center justify-content-center me-2" style={{ width: '35px', height: '35px' }}>
            🚧
          </div>
          <span style={{ letterSpacing: '1px' }}>ISS</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/" className="text-white-50 hover-white text-uppercase small fw-bold tracking-wider">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white-50 hover-white text-uppercase small fw-bold tracking-wider">About Us</Nav.Link>
            <Nav.Link as={Link} to="/shopping" className="text-white-50 hover-white text-uppercase small fw-bold tracking-wider">Products</Nav.Link>
            <div className="d-none d-lg-block mx-2" style={{ height: '20px', width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
            <Nav.Link as={Link} to="/login" className="text-white-50 hover-white text-uppercase small fw-bold tracking-wider">Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className="btn btn-warning text-dark px-4 fw-bolder rounded-pill shadow-sm text-uppercase small tracking-wider" style={{ transition: 'all 0.3s ease' }}>Registration</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
