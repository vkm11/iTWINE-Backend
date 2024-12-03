const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let leaveSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dep: {
        type: String,
        required: true
    },

    formdate: {
        type: Date,
        required: true
    },
    todate: {
        type: Date,
        required: true
    },
    status: {
        type: Number,
        required: true
    },


}, {
    collection: 'leaves'
})
module.exports = mongoose.model('leaves', leaveSchema)