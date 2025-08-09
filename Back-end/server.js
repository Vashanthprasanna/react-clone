const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const Profile = require("./db/models/profile.js");
const Project = require("./db/models/project.js");
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://vashanth:vashanth1218@node-test.exgub.mongodb.net/Clone?retryWrites=true&w=majority&appName=node-test')
.then(() => {console.log("Connected to MongoDB successfully...")})
.then(() => {app.listen(3000)})
.then(() => {console.log("Connected to Server successfully...")})
.catch(err => {console.log("Error connecting to MongoDB:", err)});


app.get("/", (req,res) => {
    res.send("Hello World");
})

app.get("/profile", (req,res) => {
    Profile.find()
        .then((response)=>{res.status(200).json(response)})
        .catch((err)=>{res.status(400).json({message: "Error fetching profiles", error: err})});
})

app.get("/project", (req,res) => {
    Project.find()
        .then((response)=>{res.status(200).json(response)})
        .catch((err)=>{res.status(400).json({message: "Error fetching profiles", error: err})});
})
