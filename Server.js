const express = require('express');

const app = express();

const http =require('http').createServer(app);

const io =require('socket.io')(http);


app.use(express.static('public'));


//handle socket communication for chat functonalities

io.on('connection',(socket)=>{
    console.log('a user connected');
    socket.on('join-chat',(chatId)=>{
        //logic to join a chat room 
        socket.join(chatId)
    });

    socket.on('send-meesage',(message)=>{
        io.to(message.chatId).emit('new-message',message)
    });
    socket.on('disconnect',()=>{
        console.log('A user disconnected')
    })
})
 

// start  a server 
http.listen(3000,()=>{
    console.log('server is listening on the port 3000')
})