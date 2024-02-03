const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.post("/signup", (req, res) => {
    res.json("okay");
});

app.listen(8081);
