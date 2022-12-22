const express = require("express");
const env = require("dotenv");
env.config();
const server = express();
server.use(express.json());

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
    console.log("listening to port", PORT);
});

server.get("/", (req, res) => {
    res.send("Welcome to Turners!");
});

const quote = require("./quote");
let output;

server.post("/Quote", (req, res) => {
    input = req.body;
    output = quote(input);
    if (output.hasOwnProperty("error")) {
        res.send("Unsuccessfully inputted.");
    } else {
        res.send("Successfully inputted!");
    }
});

server.get("/Quote", (req, res) => {
    res.send(output);
});