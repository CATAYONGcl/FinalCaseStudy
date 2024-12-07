import React from "react";
import { Table, Button } from "react-bootstrap";

const Cart = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.product_name}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
                />
              </td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <Button onClick={() => onRemove(item.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
