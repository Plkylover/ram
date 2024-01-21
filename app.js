require("dotenv").config();
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("./public"))
app.get("/:name", (req, res)=>{
    res.render("index", {name: req.params.name})
})
app.get("/display/:name", (req, res)=>{
    res.render("display", {name: req.params.name})
})
app.listen(process.env.PORT, ()=>{
    console.log("working")
})