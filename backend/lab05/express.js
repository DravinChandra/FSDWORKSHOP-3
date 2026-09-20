
import express from "express";

const app = express();
const PORT = 4000;


app.use(express.json());
const userdata = [
    {
        id: 1,
        name: "cm",
        email: "drersdasdfs"
    }
];


app.get("/msg", (req, res) => {
    res.status(200).json({
        message: "Welcome user"
    });
});


app.post("/create", (req, res) => {
    const { id, name, email } = req.body;

    const newUser = {
        id,
        name,
        email
    };

    userdata.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

