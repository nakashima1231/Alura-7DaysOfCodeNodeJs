const express = require('express');
const router = express.Router();
const { criarControleMissao } = require('../controllers/missionController') ;

router.post("/missions", criarControleMissao);

module.exports = router;