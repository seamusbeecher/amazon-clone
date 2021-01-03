const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I4VOLAUqL3nWbrfDJ81DxV5i01Yr8uHNm61RUpJHMhDOc3ADjqzLDA1FDMboQXLZkP2RUtCl8Yhlrr7IFD7OGLQ00upsmgRaw');

// -- API

// -- App config
const app = express();

// -- Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// -- API routes
// EXAMPLE: app.get('/seamus', (request, responce) => responce.status(200).send('Seamus API'));

app.get('/', (request, responce) => responce.status(200).send('Seamus API'));

app.post('/payments/create', async (request, responce) => {
    const total = request.query.total;

    console.log('Payment request recieved!!! For this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK- Created
    responce.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// -- Listen command
exports.api = functions.https.onRequest(app)

// Example end point
// http://localhost:5001/clone-409d0/us-central1/api