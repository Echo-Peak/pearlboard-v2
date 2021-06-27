process.env.DB_CONNECTED = false;

const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const keys = require("./server/config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
const routes = require('./routes');
const AuthEndpoints = require('./auth');
const mongoose = require('mongoose');


const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = routes.getRequestHandler(app);

function startServer(){  
    const server = express();
        // Static files
        // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));
    server.use(session({
        secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
      }));
    server.use(bodyParser.json());


    server.get('/healthcheck',(req, res) => res.status(200).end('ok'));
    server.use('/auth', AuthEndpoints)
    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.post('/api/stripe/checkout', async (req, res) => {
        await stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'Mojosa - React Next Landing Page Templates',
            source: req.body.token.id
        });
        res.send({})
    });

    const PORT = 8080;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`Lisiening on port ${PORT}`);
    });
}

app.prepare()
.then(() => mongoose.connect(process.env.DB_URL))
.then(()=>{
    console.log('Services started succesfully!');
    process.env.DB_CONNECTED = true;
})
.catch(err =>{
    console.log(err);
})
.finally(()=>{
    startServer();
});