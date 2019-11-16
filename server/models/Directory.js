const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const directorySchema = new Schema({
    title: {type: String, required: [true, 'required field']},
    imageUrl: {type: String, required: [true, 'required field']},
    linkUrl: {type: String, required: [true, 'required field']}
});

const Directory = new mongoose.model('Directory', directorySchema);


module.exports = Directory;