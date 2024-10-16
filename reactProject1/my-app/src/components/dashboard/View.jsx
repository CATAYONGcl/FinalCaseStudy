import React from "react";
import './View.css'; // Import the CSS for styling

const View = () => {
  // Example product data
  const product = {
    name: "Pogi si Gabriel Capapas",
    barcode: "1234567890123",
    price: "₱150",
    quantity: "1",
    category: "Kagwapuhan",
  };

  return (
    <div className="view-product-container">
      <h1 className="view-product-title">View Product</h1>
      <div className="product-details">
        <p><strong>Product Name:</strong> {product.name}</p>
        <p><strong>Barcode:</strong> {product.barcode}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Available Quantity:</strong> {product.quantity}</p>
        <p><strong>Category:</strong> {product.category}</p>
      </div>
      <button type="button" className="submit-button">Back to Dashboard</button>
    </div>
  );
};

export default View;
