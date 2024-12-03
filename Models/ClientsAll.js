const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let clientsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },

}, {
    collection: 'clients'
})
module.exports = mongoose.model('clients', clientsSchema)