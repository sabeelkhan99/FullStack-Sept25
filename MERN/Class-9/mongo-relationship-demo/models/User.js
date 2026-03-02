const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    addresses: [
        {
            city: String,
            country: String,
            _id: false
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;