
import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

const FILE = "./MOCK_DATA.json";

//
function getUsers() {
    const data = fs.readFileSync(FILE, "utf-8");
    return JSON.parse(data);
}

// Save users
function saveUsers(users) {
    fs.writeFileSync(
        FILE,
        JSON.stringify(users, null, 2)
    );
}


app.get("/", (req, res) => {
    res.json({
        message: "User REST API is running",
        endpoints: {
            allUsers: "GET /users",
            singleUser: "GET /users/:id",
            createUser: "POST /users",
            updateUser: "PUT /users/:id",
            deleteUser: "DELETE /users/:id"
        }
    });
});


app.get("/users", (req, res) => {
    const users = getUsers();

    res.json({
        total: users.length,
        users
    });
});


app.get("/users/:id", (req, res) => {
    const users = getUsers();

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});



app.post("/users", (req, res) => {
    const users = getUsers();

    const {
        first_name,
        last_name,
        email,
        gender,
        job_tittle
    } = req.body;

    if (!first_name || !last_name || !email) {
        return res.status(400).json({
            message: "first_name, last_name and email are required"
        });
    }

    const newId =
        users.length > 0
            ? Math.max(...users.map(user => user.id)) + 1
            : 1;

    const newUser = {
        id: newId,
        first_name,
        last_name,
        email,
        gender: gender || "",
        job_tittle: job_tittle || ""
    };

    users.push(newUser);

    saveUsers(users);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});

// ==========================
// PUT - Update User
// ==========================
app.put("/users/:id", (req, res) => {
    const users = getUsers();

    const id = Number(req.params.id);

    const index = users.findIndex(
        user => user.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users[index] = {
        ...users[index],
        ...req.body,
        id
    };

    saveUsers(users);

    res.json({
        message: "User updated successfully",
        user: users[index]
    });
});


app.delete("/users/:id", (req, res) => {
    const users = getUsers();

    const id = Number(req.params.id);

    const index = users.findIndex(
        user => user.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser = users.splice(index, 1)[0];

    saveUsers(users);

    res.json({
        message: "User deleted successfully",
        user: deletedUser
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});