const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const collectionSchema = new Schema({ 
    title: {type: String, required: [true, 'required field']},
    routeName: {type: String, required: [true, 'required field']},
    items: [{type: Schema.Types.ObjectId, ref: 'Item'}],
});

const Collection = new mongoose.model('Collection', collectionSchema);


module.exports = Collection;