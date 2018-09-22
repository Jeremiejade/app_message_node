const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname , '../public');

const app = express();

app.use('/', express.static(publicPath)) //remplace le chemin de base de app

app.listen(3000, ()=>{
    console.log('listen  is up on', 3000);
});
