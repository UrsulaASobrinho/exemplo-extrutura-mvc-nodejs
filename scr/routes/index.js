const express = require('express');
//bibliotecas/pacotes 
const router = express.Router();
// tras para router as funcoes 

//padrao do ejs para rotas
router.get('/', (req, res, next) => {
    res.render('index.html', {
        title: "Passo-a-passo",
        version: "0.0.0"
    }); 
});

//ultima linha do seu arquivo
module.exports = router;