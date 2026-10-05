const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Jenkins Backend!"
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});