import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { fetchAPI } from "../../utils/api";

const ProductList = ({ onEdit, onView }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAPI("/products");
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Barcode</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.barcode}</td>
            <td>{product.product_name}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td>{product.available_quantity}</td>
            <td>
              <Button onClick={() => onView(product.id)} variant="info">
                View
              </Button>{" "}
              <Button onClick={() => onEdit(product.id)} variant="warning">
                Edit
              </Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductList;
