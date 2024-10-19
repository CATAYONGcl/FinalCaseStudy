import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css'; // Import the custom CSS

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      alert('Login successful! Redirecting to dashboard...');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="background">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row>
          <Col md={12}>
            <div className="login-box">
              <h2>Login</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button type="submit" className="w-100">
                  Login
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <a href="#">Forgot password?</a>
                <br />
                <a href="#">Don't have an account? Register</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;