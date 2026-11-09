
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to CargoPool AI!",
        status: "Server is running successfully",
        version: "1.0.0"
    });
});

// Health check
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "CargoPool AI API is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`CargoPool AI server running at http://localhost:${PORT}`);
});
