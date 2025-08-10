const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

const Profile = require("./db/models/profile.js");
const Project = require("./db/models/projects.js");
const Settings = require("./db/models/settings.js");
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.URI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT,() => {
        console.log("Server is running on port", process.env.PORT);
    })
})
.catch(err => {console.log("Error connecting to MongoDB:", err)});




app.get("/", (req,res) => {
    res.send("Hello World");
})

app.get("/profile", (req,res) => {
    Profile.find()
        .then((response)=>{res.status(200).json(response)})
        .catch((err)=>{res.status(400).json({message: "Error fetching profiles", error: err})});
})

app.get("/projects", (req,res) => {
    Project.find()
        .then((response)=>{res.status(200).json(response)})
        .catch((err)=>{res.status(400).json({message: "Error fetching profiles", error: err})});
})

app.get("/settings", (req,res) => {
    Settings.find()
        .then((response)=>{res.status(200).json(response)})
        .catch((err)=>{res.status(400).json({message: "Error fetching profiles", error: err})});
})
