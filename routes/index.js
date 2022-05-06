const express = require('express');
const router = express.Router();
const gamecontroller = require('../controllers/gamecontroller');

router.get('/game/start/:num', gamecontroller.fetchResult);

module.exports = router;