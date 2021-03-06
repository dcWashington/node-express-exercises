const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotion to you');
})
.post((req, res) => {
    res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send the: ${req.params.promotionId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /promotions/${req.params.promotionId}`);
})
.put((req, res) => {
    res.statusCode = 200;
    res.end(`Updating the promotion: ${req.params.promotionId}\n
    Will update the promotion: ${req.body.name}\n
        with description: ${req.body.description}`);})
.delete((req, res) => {
    res.end(`Deleting the promotion: ${req.params.promotionId}`);
});

module.exports = promotionRouter;