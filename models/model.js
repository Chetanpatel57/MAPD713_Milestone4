const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    dob: {
        required: true,
        type: String

    },
    condition: {
        required: true,
        type: String
    },
    oxygenLevel: {
        required: true,
        type: String
    },
    bloodPressure: {
        required: true,
        type: String
    },
    sugar: {
        required: true,
        type: Number
    },
})
module.exports = mongoose.model('Data', dataSchema)