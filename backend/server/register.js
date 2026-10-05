import express from "express";
import fs from "fs";

const router = express.Router();

const file = "./users.json";

// Register
router.post("/register", (req, res) => {
  const {
    name,
    email,
    username,
    password,
    confirmPassword
  } = req.body;

  // Check required fields
  if (
    !name ||
    !email ||
    !username ||
    !password ||
    !confirmPassword
  ) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  // Check password
  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Password does not match"
    });
  }

  // Read existing users
  let users = [];

  try {
    const data = fs.readFileSync(file, "utf-8");

    if (data.trim()) {
      users = JSON.parse(data);
    }
  } catch (error) {
    users = [];
  }

  // Check username already exists
  const existingUser = users.find(
    (user) => user.username === username
  );

  if (existingUser) {
    return res.status(409).json({
      message: "Username already exists"
    });
  }

  // Create new user
  const newUser = {
    id: users.length + 1,
    name,
    email,
    username,
    password
  };

  // Add user
  users.push(newUser);

  // Save data
  fs.writeFileSync(
    file,
    JSON.stringify(users, null, 2)
  );

  res.status(201).json({
    message: "Registration successful",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      username: newUser.username
    }
  });
});

export default router;