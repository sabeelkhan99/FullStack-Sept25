const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const ApiResponse = require('../core/ApiResponse');
const { BadRequestError, AuthenticationError } = require('../core/ApiError');
const jwt = require('jsonwebtoken');
const { isLoggedIn } = require('../middlewares/user');

const JWT_SECRET = "P8YyTpUZV44Q2RL1ycdDFyBbDJ4cfU7wdS0p0kSvPhpbuWYwyRPMHjwB0Vkm76pT";

// Register Route
router.post('/register', async (req, res) => {
    const { email, password, username, role } = req.body;
    // if user with this username already exist
    const user = await User.findOne({ username });
    if (user) {
        throw new BadRequestError('User with this username already exists');
    }
    const hash = await bcrypt.hash(password, 12);
    const newUser = await User.create({ email, username, password: hash, role });
    res.json(ApiResponse.build(true, { email: newUser.email, username: newUser.username }, 'Registered successfully'));
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // check if the user exist with this username
    const user = await User.findOne({ username });
    if (!user) {
        throw new BadRequestError('username or password is invalid');
    }

    // we have to verify is incoming password and stored password are same.
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new BadRequestError('username or password is invalid');
    }

    // Generate the token - JWT (you can also implement access token & refresh token)
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {expiresIn: '7d'});

    res.json(ApiResponse.build(true, {token: token}, 'LoggedIn Successfully'));
});

// Fetch Profile
router.get('/profile', isLoggedIn, async (req, res) => {
    const { userId } = req;
    const user = await User.findById(userId);
    res.json(ApiResponse.build(true, { username: user.username, email: user.email, role: user.role }, 'User profile details'));
});

module.exports = router;