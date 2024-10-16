import React, { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard"; // Import the Dashboard component
import Add from "./components/dashboard/Add"; // Import the Add component
import Edit from "./components/dashboard/Edit"; // Import the Edit component
import Delete from "./components/dashboard/Delete"; // Import the Delete component
import View from "./components/dashboard/View"; // Import the View component
import "./components/dashboard/dashboard.css"; // Import the CSS for styling

const App = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [showViewProduct, setShowViewProduct] = useState(false); // State for showing View component

  const handleAddProductClick = () => {
    setShowAddProduct(true);
    setShowEditProduct(false); // Hide Edit component
    setShowDeleteProduct(false); // Hide Delete component
    setShowViewProduct(false); // Hide View component
  };

  const handleEditProductClick = () => {
    setShowEditProduct(true);
    setShowAddProduct(false); // Hide Add component
    setShowDeleteProduct(false); // Hide Delete component
    setShowViewProduct(false); // Hide View component
  };

  const handleDeleteProductClick = () => {
    setShowDeleteProduct(true);
    setShowAddProduct(false); // Hide Add component
    setShowEditProduct(false); // Hide Edit component
    setShowViewProduct(false); // Hide View component
  };

  const handleViewProductClick = () => {
    setShowViewProduct(true);
    setShowAddProduct(false); // Hide Add component
    setShowEditProduct(false); // Hide Edit component
    setShowDeleteProduct(false); // Hide Delete component
  };

  return (
    <div className="App">
      <Dashboard 
        onAddProductClick={handleAddProductClick}
        onEditProductClick={handleEditProductClick}
        onDeleteProductClick={handleDeleteProductClick}
        onViewProductClick={handleViewProductClick} // Pass the View handler
      />
      <div className="content-container">
        {showAddProduct && <Add />} {/* Render Add component */}
        {showEditProduct && <Edit />} {/* Render Edit component */}
        {showDeleteProduct && <Delete />} {/* Render Delete component */}
        {showViewProduct && <View />} {/* Render View component */}
      </div>
    </div>
  );
};

export default App;
