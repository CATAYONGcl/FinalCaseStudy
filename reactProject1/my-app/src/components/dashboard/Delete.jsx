import React from "react";
import './Delete.css'; // Import the CSS for styling

const Delete = () => {
  return (
    <div className="delete-product-container">
      <h1 className="delete-product-title">Delete Product</h1>
      <p className="delete-product-message">
        Are you sure you want to delete this product? This action cannot be undone.
      </p>
      <button type="button" className="submit-button">Confirm Deletion</button>
    </div>
  );
};

export default Delete;
