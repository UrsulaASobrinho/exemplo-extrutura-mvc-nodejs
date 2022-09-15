# exemplo-extrutura-mvc-nodejs

pacotes utilizados
---------------------
npm install express
npm install path
npm install ejs

extrutura base do projeto
--------------------------
scr/
index.js

scr/public   
scr/public/css   --> configurações de paginas layout
scr/public/img   --> imagens public
scr/public/js    --> configurações de pagina layout


scr/rotas
scr/rotas/index.js

scr/novas pastas para subdividir e deixar arrumadinho :)

scr/views
scr/views/index.html
scr/views/pages/*.html --> todas as page  principais de chamada para cada nova pasta do sistema

scr/views/layouts
scr/views/layouts/footer.html
scr/views/layouts/head.html
scr/views/layouts/navbar.html


PQ = utilizo index. para todas as subpastas 
o index por ser autoexecutavel no brouwse evitar erros de acesso e/ou acesso indevido

observação configuração do EJS base (automatica) 
/views/layouts
a mais para facilitar utilizo a troca de extensoes ejs para html
app.engine('html', require('ejs').renderFile); 



