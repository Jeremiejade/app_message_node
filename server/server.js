const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const app = express()
let server = http.createServer(app)

// permettra a io de communiquer avec le client
let io = socketIO(server)

const PORT = process.env.PORT || 4000 

// Permet d'utiliser le chemin vers le dossier public pour avoir le index.html rendu via express
app.use(express.static(publicPath))

io.on('connection', (socket)=>{
    console.log('Nouvelle connection');

socket.on('createMessage', (message) =>{
    console.log('createmessage', message);
    io.emit('newMessage', {
        from: message.from,
        text:message.text,
        creatAt: new Date().getTime()
         
    })
})

  

    socket.on('disconnect', ()=>{
        console.log('disconnect au client')});
});

server.listen(PORT, () => {
    console.log(`écoute sur le port ${PORT}`)
})

console.log(__dirname + '/../public');
console.log(publicPath)