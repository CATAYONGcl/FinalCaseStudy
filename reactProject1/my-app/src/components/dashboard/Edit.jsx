import React from "react";
import './Edit.css'; // Import the CSS for styling

const Edit = () => {
  return (
    <div className="edit-product-container">
      <h1 className="edit-product-title">Edit Product</h1>
      <form className="edit-product-form">
        <div className="form-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" placeholder="Enter product name" />
        </div>
        <div className="form-group">
          <label htmlFor="barcode">Item Barcode</label>
          <input type="text" id="barcode" placeholder="Enter barcode" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Product Description</label>
          <input type="text" id="description" placeholder="Enter product description" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" placeholder="Enter price" />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Available Quantity</label>
          <input type="number" id="quantity" placeholder="Enter available quantity" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" placeholder="Enter category" />
        </div>
        <button type="submit" className="submit-button">Update Product</button>
      </form>
    </div>
  );
};

export default Edit;
