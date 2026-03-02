const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/relationship-db')
    .then(() => console.log('connection open'))
    .catch((err) => console.log(err));


async function addAddress(userId) {
    const user = await User.findById(userId);
    user.addresses.push({ city: 'New Delhi', country: 'India' });
    await user.save();
    console.log(user);
}

async function main() {
    // const user = await User.create({ name: 'max', age: 24 });
    // console.log(user);
    addAddress('69a5bae9efd63bf2d6f2afe9');
}

main();

