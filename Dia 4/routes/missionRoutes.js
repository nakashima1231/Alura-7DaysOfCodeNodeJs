const express = require('express');
const router = express.Router();
const { criarControleMissao, verMissoes, verMissaoId } = require('../controllers/missionController') ;

router.post("/missions", criarControleMissao);
router.get("/missions", verMissoes);
router.get("/missions/:id", verMissaoId);

module.exports = router;