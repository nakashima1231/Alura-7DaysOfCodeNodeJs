const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./space_missions.db');

// Criação da tabela, se não existir
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS missions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        tripulacao TEXT NOT NULL,
        nave TEXT NOT NULL,
        destino TEXT NOT NULL,
        status TEXT NOT NULL,
        duracao TEXT NOT NULL
    )`);
});

module.exports = db;