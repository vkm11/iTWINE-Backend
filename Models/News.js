const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let newsSchema = new Schema({

    date: {
        type: Date,
        required: true
    },
    news: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },

}, {
    collection: 'news'
})
module.exports = mongoose.model('news', newsSchema)