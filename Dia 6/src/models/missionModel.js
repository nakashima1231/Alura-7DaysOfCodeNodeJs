const db = require('../database/db')

function criarMissao(missao, callback) {
    const {nome, tripulacao, nave, destino, status, duracao} = missao;

    db.run(
        `INSERT INTO missions (nome, tripulacao, nave, destino, status, duracao)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [nome, tripulacao, nave, destino, status, duracao],
        function (err) {
            callback(err);
        }
    );
}

function getMissions(callback) {
    db.all("SELECT * FROM missions", [], (err, rows) => {
        callback(err, rows);
    });
}

function getMissionById(id, callback) {
    db.get("SELECT * FROM missions WHERE id = ?", [id], (err, row) => {
        callback(err, row);
    });
}

function updateMission(id, missao, callback) {
    db.run(
        `UPDATE missions
        SET nome = ?, tripulacao = ?, nave = ?, destino = ?, status = ?, duracao = ? 
        WHERE id = ?`, [missao.nome, missao.tripulacao, missao.nave, missao.destino, missao.status, missao.duracao , id], function(err) {
            callback(err, this.changes);
        }
    );
}

function deleteMission(id, callback) {
    db.run(
        `DELETE FROM missions
        WHERE id = ?`, [id], function(err) {
            callback(err, this.changes);
        }
    );
}



module.exports = { criarMissao, getMissions, getMissionById, updateMission, deleteMission };