const { criarMissao, getMissions, getMissionById, updateMission, deleteMission } = require('../models/missionModel');

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

function atualizarMissao(req, res) {
    const id = req.params.id;
    const body = req.body;
    updateMission(id, body, (err, changes) => {
        if(err) {
            return res.status(500).send("Erro ao atualizar missao");
        }

        if(changes === 0) {
            return res.status(404).send("Nenhuma missao com este id");
        }

        res.send("Missao atualizada");
    });
}

function deletarMissao(req, res) {
    const id = req.params.id;
    deleteMission(id, (err, changes) => {
        if(err) {
            return res.status(500).send("Erro ao remover missao");
        }

        if(changes === 0) {
            return res.status(404).send("Nenhuma missao com este id");
        }

        res.send("Missao removida");
    });
}


module.exports = { criarControleMissao, verMissoes, verMissaoId, atualizarMissao, deletarMissao };