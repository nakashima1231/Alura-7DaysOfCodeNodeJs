const { criarMissao } = require('../models/missionModel');

function criarControleMissao(req, res) {
    criarMissao(req.body, (err) => {
        if(err) {
            return res.status(500).send("Erro ao salvar missao");
        }

        res.send("Missao salva");
    });
}

module.exports = { criarControleMissao };