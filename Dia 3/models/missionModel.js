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

module.exports = { criarMissao };