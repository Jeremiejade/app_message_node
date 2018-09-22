const path = require('path');
const express = require('express');

var port = process.env.PORT || 3000

const publicPath = path.join(__dirname , '../public');

const app = express();

app.use('/', express.static(publicPath)) //remplace le chemin de base de app

app.listen(port, ()=>{
    console.log(`listen  is up on ${port}`);
});
