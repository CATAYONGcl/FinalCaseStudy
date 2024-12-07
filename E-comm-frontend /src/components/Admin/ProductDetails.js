import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { fetchAPI } from "../../utils/api";

const ProductDetails = ({ productId, onBack }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchAPI(`/products/${productId}`);
        if (data && data.product) {
          setProduct(data.product);
        } else {
          throw new Error("Product not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p>{error}</p>
        <Button onClick={onBack}>Back</Button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center">
        <p>Product not found.</p>
        <Button onClick={onBack}>Back</Button>
      </div>
    );
  }

  return (
    <Card className="shadow-lg mt-3">
      <Card.Header as="h5" className="bg-primary text-white">
        Product Details
      </Card.Header>
      <Card.Body>
        <Card.Title>{product.product_name}</Card.Title>
        <Card.Text>
          <strong>Barcode:</strong> {product.barcode}
        </Card.Text>
        <Card.Text>
          <strong>Description:</strong> {product.description}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${product.price}
        </Card.Text>
        <Card.Text>
          <strong>Available Quantity:</strong> {product.available_quantity}
        </Card.Text>
        <Card.Text>
          <strong>Category:</strong> {product.category}
        </Card.Text>
        <Button variant="secondary" onClick={onBack}>
          Back to Product List
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
