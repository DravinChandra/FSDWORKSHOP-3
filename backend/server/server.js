import express from "express";
import cors from "cors";

import registerRouter from "./register.js";
import loginRouter from "./login.js";

const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());

// Register API
app.use("/api", registerRouter);

// Login API
app.use("/api", loginRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});