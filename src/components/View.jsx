import Admin_navbar from "./Admin_navbar";
import Footer from "./Footer";
import { Container, Table, Card } from 'react-bootstrap';

function View() {
  const products = [
    { id: 1, name: "Industrial Safety Helmet", category: "Head Protection", price: "Rs. 2,500", stock: 150 },
    { id: 2, name: "Steel Toe Safety Boots", category: "Foot Protection", price: "Rs. 8,500", stock: 85 },
    { id: 3, name: "High-Vis Reflective Vest", category: "Body Protection", price: "Rs. 1,200", stock: 300 },
    { id: 4, name: "Full Body Harness", category: "Fall Protection", price: "Rs. 12,000", stock: 40 },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Admin_navbar />
      <Container className="flex-grow-1 py-5">
        <h2 className="fw-bold mb-4">View Inventory</h2>
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">
            <Table responsive hover className="m-0 align-middle">
              <thead className="table-dark">
                <tr>
                  <th className="py-3 ps-4">Product ID</th>
                  <th className="py-3">Product Name</th>
                  <th className="py-3">Category</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Stock Level</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td className="ps-4 fw-bold text-muted">#{product.id}</td>
                    <td className="fw-bold">{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      <span className="badge bg-success rounded-pill">{product.stock} units</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}

export default View;
