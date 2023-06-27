const express = require("express");
const cors = require("cors");

const pickup = require("./data.js");

const app = new express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req,res)=>{
	res.send("Just a simple pickup lines api!");
});

app.get("/pickup", (req,res)=>{
	const RandomIndex = Math.floor(Math.random()*pickup.length)
	const pickupline = pickup[RandomIndex];
	res.send(pickupline);
});

app.listen(port, (req, res)=>{
	console.log(`Running on port ${port}`);
})
