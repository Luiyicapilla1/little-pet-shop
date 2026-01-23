let express = require('express');
let router = express.Router();
let DbService = require('../services/DbService');

/* GET pets page. */
router.get('/', async function(req, res, next) {
    res.json(await DbService.get());
});

router.get('/:id', async function(req, res, next) {
    res.json(await DbService.getById(req.params.id));
});

router.put('/:id', async function(req, res, next) {
    res.json(await DbService.put(req.params.id, req.body.name, req.body.desc, req.body.img, req.body.type, req.body.status));
});

router.post('/', async function(req, res, next) {
    res.json(await DbService.post(req.body.name, req.body.desc, req.body.img, req.body.type, req.body.status));
});


module.exports = router;