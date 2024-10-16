import React from "react";
import "./Add.css"; // Ensure this points to the correct CSS file

const Add = () => {
    return (
        <div className="add-product-container">
            <h2 className="add-product-title">Add New Product</h2>
            <form className="add-product-form">
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" placeholder="Enter product name" />
                </div>
                <div className="form-group">
                    <label>Barcode</label>
                    <input type="text" placeholder="Enter barcode" />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" placeholder="Enter price" />
                </div>
                <div className="form-group">
                    <label>Available Quantity</label>
                    <input type="number" placeholder="Enter quantity" />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" placeholder="Enter category" />
                </div>
                <button type="submit" className="submit-button">Add Product</button>
            </form>
        </div>
    );
};

export default Add;
