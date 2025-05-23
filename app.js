const express = require('express');
const path = require('path');

const app = express();

// Configurando o diretório de arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do EJS como mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Verifique se o caminho está correto

// Rota principal
app.get('/', (req, res) => {
    res.render('index', { title: 'REDCH', heading: 'BEM-VINDO A REDCH' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
