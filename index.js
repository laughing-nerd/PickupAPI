const express = require("express");
const cors = require("cors");
const { data } = require("./data.js");

const app = new express();
// app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req,res)=>{
	res.send("Just a simple pickup lines api!");
});

app.get("/pickup", (req,res)=>{
	const pickupline = data[Math.floor(Math.random() * data.length)];
	res.status(200).send({
		pickup: pickupline
	});
});

app.listen(port, (req, res)=>{
	console.log(`Running on port ${port}`);
})
