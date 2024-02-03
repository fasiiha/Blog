const express = require('express');
const app = express();

app.post("/signup", (req, res) => {
    res.json("okay");
});

app.listen(8081);
