const API_BASE = "http://127.0.0.1:8000/api";

export const fetchAPI = async (url, method = "GET", body = null, token = null) => {
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${API_BASE}${url}`, {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "API error occurred");
  }

  return await response.json();
};
