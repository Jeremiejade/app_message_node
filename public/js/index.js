var socket = io();
        socket.on('connect', ()=>{
            console.log('conecter au server !'); 
            
        });

        socket.on('disconnect', ()=>{
            console.log('disconnect');
        });

        socket.on('newMessage', (message)=>{
            console.log(message);
        });

          