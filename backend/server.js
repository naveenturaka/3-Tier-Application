const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());


// Home API
app.get("/", (req, res) => {

    res.send("3-Tier Backend is running!");

});


// Backend test API
app.get("/api/message", (req, res) => {

    res.json({
        success: true,
        message: "Hello from Node.js Backend!"
    });

});


// Users API
app.get("/api/users", (req, res) => {

    const users = [
        {
            id: 1,
            name: "Naveen",
            email: "naveen@example.com"
        },
        {
            id: 2,
            name: "John",
            email: "john@example.com"
        }
    ];

    res.json({
        success: true,
        users: users
    });

});


// Start server
app.listen(PORT, () => {

    console.log(`Backend running on port ${PORT}`);

});
