import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

// Temporary user data
const userdata = [
    {
        id: 1,
        name: "cm",
        email: "drersdasdfs"
    }
];

// GET API
app.get("/msg", (req, res) => {
    res.status(200).json({
        message: "Welcome user"
    });
});

// POST API - Create User
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

// PUT API - Update User
app.put("/update/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    const user = userdata.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = name;
    user.email = email;

    res.status(200).json({
        message: "User updated successfully",
        user: user
    });
});

// DELETE API - Delete User
app.delete("/delete/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = userdata.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser = userdata.splice(index, 1);

    res.status(200).json({
        message: "User deleted successfully",
        user: deletedUser[0]
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});