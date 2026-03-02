const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
    name: String,
    address: String,
    capacity: Number,
});

const Theatre = mongoose.model('Theatre', theatreSchema);

module.exports = Theatre;