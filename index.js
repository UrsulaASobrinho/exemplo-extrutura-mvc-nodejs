const express = require("express");
//bibliotecas/pacotes 
const app = express();
//chama/extancia 
const path = require('path');
//bibliotecas/pacotes 

//settingss
app.set('port', process.env.PORT || 3000);
//variável de ambiente PORT para informar ao seu servidor web em qual porta escutar.
//isso torna seu servidor capaz de aceitar um parâmetro "qual porta escutar" do ambiente.

//config ejs
app.set('views', path.join(__dirname, '/scr/views'));
// variável de ambiente modular, uma maneira de criar e apontar para diretórios
app.engine('html', require('ejs').renderFile);
//mapear o mecanismo de modelo EJS para arquivos “.html”:
app.set('view engine', 'ejs');
// padrão ejs


//routes 
app.use(require('./scr/routes/index'));
//aponta onde estao as configuraçoes de rotas

//start files
app.use(express.static(path.join(__dirname, 'public')));
//carregar os arquivos que estão no diretório public a partir do prefixo do caminho /static.



//server 
// inicia um servidor e escuta a porta
//Obs  deve ser a ultima linha do seu arquivo inicial
app.listen(app.get('port'), () => {
    console.log('servidor on port', app.get('port'));
});