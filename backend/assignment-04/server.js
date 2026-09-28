// server.js

import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// GET
app.get("/", (req, res) => {
  res.json({
    message: "API Server is running"
  });
});

// GET USERS
app.get("/api/users", (req, res) => {
  res.json({
    success: true,
    users: [
      {
        id: 1,
        name: "Dravin",
        email: "dravin@gmail.com"
      },
      {
        id: 2,
        name: "Rahul",
        email: "rahul@gmail.com"
      }
    ]
  });
});

// GET USER BY ID
app.get("/api/users/:id", (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.params.id,
      name: "Dravin",
      email: "dravin@gmail.com"
    }
  });
});

// POST
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: {
      id: 3,
      name,
      email
    }
  });
});

// PUT
app.put("/api/users/:id", (req, res) => {
  const { name, email } = req.body;

  res.json({
    success: true,
    message: "User updated successfully",
    user: {
      id: req.params.id,
      name,
      email
    }
  });
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
  res.json({
    success: true,
    message: "User deleted successfully",
    id: req.params.id
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});