let express = require('express');
let router = express.Router();
let DbService = require('../services/DbService');

/* GET pets page. */
router.get('/', async function(req, res, next) {
    res.json(await DbService.get());
});
router.post('/', async function(req, res, next) {
    res.json(await DbService.post(req.body.name, req.body.desc, req.body.img, req.body.type, req.body.status));
});


module.exports = router;