const { criarMissao, getMissions, getMissionById } = require('../models/missionModel');

function criarControleMissao(req, res) {
    criarMissao(req.body, (err) => {
        if(err) {
            return res.status(500).send("Erro ao salvar missao");
        }

        res.send("Missao salva");
    });
}

function verMissoes(req, res) {
    getMissions((err, rows) => {
        if(err) {
            return res.status(500).send("Erro ao encontrar missoes");
        }
    
        res.json(rows);
    });
}

function verMissaoId(req, res) {
    const id = req.params.id;
    getMissionById(id, (err,row) => {
        if(err) {
            return res.status(500).send("Erro ao encontrar missao");
        }

        if(!row) {
            return res.status(404).send("Missão não encontrada");
        }
        res.json(row);
    });
}


module.exports = { criarControleMissao, verMissoes, verMissaoId };