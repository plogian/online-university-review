//Declare dependencies
const express = require('express');
const router = express.Router();
const university = require('../models/univerisity')

//GET HTTP Method to get all universities
router.get('/', (req, res) => {
	university.getAllUniversities((err, universities) => {
		if(err) {
			res.json({success: false, message: `Failed to load all universities. Error: ${err}`});
		} else {
			res.write(JSON.stringify({success:true, universities: universities}, null, 2));
			res.end();
		}
	})
})

//POST HTTP Method to add universities
router.post('/', (req, res, next) => {
	let newUni = new university({
		name: req.body.name,
		city: req.body.city,
		state: req.body.state,
		country: req.body.country,
		language: [req.body.language],
		studentBody: req.body.studentBody,
		website: req.body.website,
		majors: [req.body.majors]
	});
});

//DELETE HTTP to add universities
router.delete('/:id', (req, res) => {
	let id = req.params.id
	university.deleteUniversityById(id, (err, list) => {
		if(err) {
			res.json({success: false, message: `Failed to delete the university. Error: ${err}`});
		} else if(university) {
			res.json({success: true, message: "Deleted successfully"})
		} else {
			res.json({success:false});
		}
	});
});

module.exports = router;