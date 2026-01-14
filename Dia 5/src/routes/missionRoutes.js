const express = require('express');
const router = express.Router();
const { criarControleMissao, verMissoes, verMissaoId, atualizarMissao } = require('../controllers/missionController') ;

//criar a missao
router.post("/missions", criarControleMissao);

//ver as missoes
router.get("/missions", verMissoes);
router.get("/missions/:id", verMissaoId);

//atualizar uma missao
router.put("/missions/:id", atualizarMissao);

module.exports = router;