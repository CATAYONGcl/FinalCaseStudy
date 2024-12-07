import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { fetchAPI } from "../../utils/api";

const ProductForm = ({ product, onSave }) => {
  const [form, setForm] = useState(product || {
    product_name: "",
    barcode: "",
    price: 0,
    available_quantity: 0,
    category: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = product ? `/products/${product.id}` : "/products";
      const method = product ? "PUT" : "POST";
      const savedProduct = await fetchAPI(url, method, form);
      onSave(savedProduct);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <p className="text-danger">{error}</p>}
      <Form.Group>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="product_name"
          value={form.product_name || ""}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Barcode</Form.Label>
        <Form.Control
          type="text"
          name="barcode"
          value={form.barcode || ""}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={form.price || ""}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="available_quantity"
          value={form.available_quantity || ""}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          value={form.category || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={form.description || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit" disabled={loading} className="mt-3">
        {loading ? "Saving..." : "Save Product"}
      </Button>
    </Form>
  );
};

export default ProductForm;
