const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const controller = require("./app/controller/monster.controller");

//Initializing app w/ CORS and body parser for JSON
const app = express();
var corsOptions = { origin: "http://localhost:8080" };
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    next();
})
//Initializing Monster schema and connection to database
const Monster = db.monster;
db.mongoose
    .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.log("Error connecting to database");
        process.exit();
    })

//Default path
app.get("/", async (req, res) => {
    console.log("At home");
});

//Retrieve monster data by monster id
app.get("/api/get/monster/:val", async (req, res) => {
    let mon;
    if (!isNaN(req.params.val)) {      
        mon = await controller.findOneByMonsterID(Number(req.params.val));
    }
    else mon = await controller.findOneByName(req.params.val);
    res.json(mon);
})

app.get("*", (req, res) => {
    res.send("404: Invalid API path.")
    return null;
})

//Starting app at port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
