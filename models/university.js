//Require mongoose package
const mongoose = require('mongoose');

//Define universitySchema with all of its parameters
const UniversitySchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: false
	},
	state: {
		type: String,
		required: false
	},
	country: {
		type: String,
		required: false
	},
	language: {
		type: [String],
		required: false
	},
	studentBody: {
		type: [String],
		required: false
	},
	website: {
		type: String,
		required: true
	},
	majors: {
		type: [String],
		required: false
	}
});

//create a model using mongoose.model and export it
const University = module.exports = mongoose.model('University', UniversitySchema);

//University.find() returns all universities
module.exports.getAllUniversities = (callback) => {
	University.find(callback);
}

//University.save inserts the document into MongoDB
module.exports.addUniversity = (newUniversity, callback) => {
	newUniversity.save(callback);
}

//Delete University by ID
module.exports.deleteUniversityById = (id, callback) => {
	let query = { _id: id};
	University.remove(query, callback);
}

