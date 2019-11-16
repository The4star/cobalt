const express = require('express');
const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/', (req, res) => {
    console.log(req.body)
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency:'aud'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({error: stripeErr})  
        } else {
            res.status(200).send({success: stripeRes})
        }
    })
})

module.exports = router;