const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {type: String, required: [true, 'required field']},
    imageUrl: {type: String, required: [true, 'required field']},
    price: {type: Number, required: [true, 'required field']}
});

const Item = new mongoose.model('Item', itemSchema);

module.exports = Item;