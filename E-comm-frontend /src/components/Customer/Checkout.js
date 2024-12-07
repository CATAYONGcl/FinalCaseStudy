import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Checkout = ({ cartItems, onCheckout }) => {
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    contact: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = { ...shippingDetails, paymentMethod, cartItems, total };
    onCheckout(orderDetails);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Checkout</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={shippingDetails.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={shippingDetails.address}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contact"
              value={shippingDetails.contact}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              as="select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option>Cash on Delivery</option>
              <option>Credit/Debit Card</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit" variant="success" className="w-100">
            Confirm and Pay ${total.toFixed(2)}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Checkout;
