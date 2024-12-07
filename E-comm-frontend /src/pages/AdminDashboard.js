import React, { useState } from "react";
import ProductList from "../components/Admin/ProductList";
import ProductForm from "../components/Admin/ProductForm";
import ProductDetails from "../components/Admin/ProductDetails";

const AdminDashboard = () => {
  const [view, setView] = useState("list");
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setView("form");
  };

  const handleEditProduct = (id) => {
    setCurrentProduct(id);
    setView("form");
  };

  const handleViewProduct = (id) => {
    setCurrentProduct(id);
    setView("details");
  };

  const handleBackToList = () => {
    setCurrentProduct(null);
    setView("list");
  };

  return (
    <div>
      {view === "list" && (
        <div>
          <ProductList onEdit={handleEditProduct} onView={handleViewProduct} />
          <button onClick={handleAddProduct} className="btn btn-primary mt-3">
            Add Product
          </button>
        </div>
      )}
      {view === "form" && (
        <ProductForm product={currentProduct} onSave={handleBackToList} />
      )}
      {view === "details" && (
        <ProductDetails productId={currentProduct} onBack={handleBackToList} />
      )}
    </div>
  );
};

export default AdminDashboard;
