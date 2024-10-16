import React from "react";
import './dashboard.css'; // Import the CSS for styling

const Dashboard = ({ onAddProductClick, onEditProductClick, onDeleteProductClick, onViewProductClick }) => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">E-Commerce Product Management</h1>
      <div className="dashboard-menu">
        <button onClick={onAddProductClick} className="menu-button">
          Add Product
        </button>
        <button onClick={onEditProductClick} className="menu-button">
          Edit Product
        </button>
        <button onClick={onDeleteProductClick} className="menu-button">
          Delete Product
        </button>
        <button onClick={onViewProductClick} className="menu-button"> {/* Added click handler */}
          View Product
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
