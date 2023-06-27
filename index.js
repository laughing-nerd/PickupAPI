const express = require("express");
const cors = require("cors");
const pick = require("./data.json");

const app = new express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req,res)=>{
	res.send("Just a simple pickup lines api!");
});

app.get("/pickup", (req,res)=>{
	res.send(pick.pick1);
});

app.listen(port, (req, res)=>{
	console.log(`Running on port ${port}`);
})
