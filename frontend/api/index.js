const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("../api/models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

const salt = bcrypt.genSaltSync(10);
const secret = "dncsdnckjsd";

mongoose.connect(
  "mongodb+srv://fasihaar:Aa123456789@cluster0.7vnhkpm.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });

    if (!userDoc) {
      return res.status(400).json("User not found");
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
      jwt.sign({ username, id: userDoc.id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json("ok");
      });
    } else {
      res.status(400).json("Wrong credentials");
    }
  } catch (err) {
    // Handle other potential errors
    console.error("Error during login:", err);
    res.status(500).json("Internal server error");
  }
});

app.get('/profile', (req, res) => {
    res.json(req.cookies);
})

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
