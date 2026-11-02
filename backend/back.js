import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name, rollno } = req.body;

    console.log(name, rollno);

    res.status(201).json({
        message: "Signup successful",
        user: {
            name,
            rollno
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});