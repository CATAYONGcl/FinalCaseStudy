import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import swal from "sweetalert";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("http://127.0.0.1:8000/sanctum/csrf-cookie", {
        method: "GET",
      });

      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("auth_token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setIsAuthenticated(true);
        navigate("/");
      } else {
        let errorMessage = "Invalid username or password";
        if (response.status === 401) {
          errorMessage = "Unauthorized! Invalid credentials";
        } else if (response.status === 500) {
          errorMessage = "Server error. Please try again later.";
        }
        swal("Error", errorMessage, "error");
      }
    } catch (error) {
      swal(
        "Error",
        error.message || "Something went wrong. Please try again later.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row>
          <Col md={12}>
            <div className="login-box">
              <h2>Login</h2>
              <Form onSubmit={loginSubmit}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoFocus
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log in"}
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
};

export default Login;
