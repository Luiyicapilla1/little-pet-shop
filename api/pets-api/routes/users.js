let express = require('express');
let router = express.Router();
let UsersService = require('../services/UsersService')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.json(await UsersService.getUser());
});
router.post('/', async function(req, res, next) {
  res.json(await UsersService.postUser(req.body.username, req.body.passw));
});

router.get('/:name', async function(req, res, next) {
  res.json(await UsersService.getByName(req.params.name));
});

module.exports = router;
