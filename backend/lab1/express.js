import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    console.log(name, email, password);

    res.status(201).json({
        message: "Signup successful",
        user: {
            name,
            email
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});