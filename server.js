require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ai = require("./ai");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
    const result = await ai.generateCategory(req.body);
    res.json(result);
});

app.listen(3000, () => {
    console.log("Server running on 3000");
});