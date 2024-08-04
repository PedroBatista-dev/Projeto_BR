const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;
const jsonFilePath = 'dados.json'; // Altere para o caminho do seu JSON

app.use(cors());
app.use(bodyParser.json());

// Endpoint para obter prêmios
app.get('/premios', (req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json('Erro ao ler o arquivo');
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint para atualizar e salvar prêmios
app.post('/premios', (req, res) => {
    const novosPremios = req.body;
    console.log(novosPremios)
    fs.writeFile(jsonFilePath, JSON.stringify(novosPremios, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao salvar o arquivo' });
        }
        res.status(200).json({ message: 'Arquivo atualizado com sucesso' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
