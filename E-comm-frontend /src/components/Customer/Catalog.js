import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { fetchAPI } from "../../utils/api";

const Catalog = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchAPI("/products");
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching catalog:", error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
        <Card style={{ width: "18rem", margin: "1rem" }} key={product.id}>
          <Card.Body>
            <Card.Title>{product.product_name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Catalog;
