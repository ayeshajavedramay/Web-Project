import Admin_navbar from "./Admin_navbar";
import Footer from "./Footer";
import { Container, Table, Card, Button } from 'react-bootstrap';

function User_request() {
  const orders = [
    { id: 101, customer: "ABC Construction", items: "50x Helmets, 20x Boots", total: "Rs. 295,000", status: "Pending" },
    { id: 102, customer: "XYZ Builders", items: "10x Harnesses", total: "Rs. 120,000", status: "Shipped" },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Admin_navbar />
      <Container className="flex-grow-1 py-5">
        <h2 className="fw-bold mb-4">User Orders & Requests</h2>
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">
            <Table responsive hover className="m-0 align-middle">
              <thead className="table-dark">
                <tr>
                  <th className="py-3 ps-4">Order ID</th>
                  <th className="py-3">Customer</th>
                  <th className="py-3">Items</th>
                  <th className="py-3">Total Value</th>
                  <th className="py-3">Status</th>
                  <th className="py-3 text-end pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td className="ps-4 fw-bold">#{order.id}</td>
                    <td className="fw-bold">{order.customer}</td>
                    <td>{order.items}</td>
                    <td>{order.total}</td>
                    <td>
                      <span className={`badge ${order.status === 'Pending' ? 'bg-warning text-dark' : 'bg-success'} rounded-pill`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="text-end pe-4">
                      <Button variant="outline-primary" size="sm" className="fw-bold">
                        Mark Processed
                      </Button>
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

export default User_request;
