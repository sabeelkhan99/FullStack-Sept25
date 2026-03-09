const express = require('express');
const stripe = require('stripe')('');
const Payment = require('../models/Payment');
const ApiResponse = require('../core/ApiResponse');

const router = express.Router();

router.post('/', async (req, res) => {
    const { amount, bookingId, method } = req.body;

    const payment = await Payment.create({
        amount,
        bookingId,
        method,
        status: 'PENDING',
    });

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: 'Movie Ticket',
                    },
                    unit_amount: amount * 100, // in paisa
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        metadata: {
            bookingId,
            paymentId: payment._id.toString(),
        },
        success_url: `${"http://localhost:5173"}/payments/success`,
        cancel_url: `${"http://localhost:5173"}/payments/cancel`,
    });

    res.json(
        ApiResponse.build(true, { payment, sessionId: session.id }, 'Payment created successfully')
    );
});

module.exports = router;