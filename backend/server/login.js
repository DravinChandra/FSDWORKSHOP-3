import express from "express";
import fs from "fs";

const router = express.Router();

const file = "./users.json";

// Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check fields
  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required"
    });
  }

  // Read users
  let users = [];

  try {
    const data = fs.readFileSync(file, "utf-8");

    if (data.trim()) {
      users = JSON.parse(data);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Unable to read user data"
    });
  }

  // Find user
  const user = users.find(
    (user) =>
      user.username === username &&
      user.password === password
  );

  // User not found
  if (!user) {
    return res.status(401).json({
      message: "Invalid username or password"
    });
  }

  // Login successful
  res.status(200).json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username
    }
  });
});

export default router;