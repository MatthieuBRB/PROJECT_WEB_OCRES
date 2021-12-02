const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    movie: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    fiction: {
        type: String,
        required: true
    }
});

const Location = mongoose.model("Location", locationSchema, "Locations");

module.exports = { Location }