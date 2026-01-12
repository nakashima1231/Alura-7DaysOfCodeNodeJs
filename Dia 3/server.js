const express = require('express');
const db = require('./database/db')

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const missionRoutes = require("./routes/missionRoutes");
app.use(missionRoutes);

// Inicializa o banco de dados
db.serialize(() => {
    console.log('Banco de dados e tabelas estão prontos');
});

app.get("/", (req, res) => {
  res.send("API de Missões Espaciais está rodando 🚀");
});

//iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}. Acesse http://localhost:${PORT}/`);
});