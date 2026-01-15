const express = require('express');
const router = express.Router();
const { criarControleMissao, verMissoes, verMissaoId, atualizarMissao, deletarMissao } = require('../controllers/missionController') ;

//criar a missao
router.post("/missions", criarControleMissao);

//ver as missoes
router.get("/missions", verMissoes);
router.get("/missions/:id", verMissaoId);

//atualizar uma missao
router.put("/missions/:id", atualizarMissao);

//deletar uma missao
router.delete("/missions/:id", deletarMissao);

module.exports = router;