var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
	const office= req.body;
	
	console.log(office.country + " " +
				office.city + " " +
				office.address);
				
	res.send(200);
});

module.exports= router;