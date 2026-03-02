const express = require('express');
const Theatre = require('../models/Theatre');
const ApiResponse = require('../core/ApiResponse');
const { isLoggedIn, isPartner } = require('../middlewares/user');

const router = express.Router();

router.post('/', isLoggedIn, isPartner, async (req, res) => {
    const { name, address, capacity } = req.body;
    const theatre = await Theatre.create({ name, address, capacity });
    res.json(ApiResponse.build(true, { id: theatre._id }, 'Theatre created'));
});

module.exports = router;