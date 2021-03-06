const express = require('express')
// const mongoose = require('mongoose')
const WebSocket = require('ws');
const path = require('path')
const app = express()
const server = require('http').createServer(app)
const logger = require('morgan')

// app.set('trust proxy', 1)
// app.set('sessionName', 'sid')
app.use(logger('server'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, './build')))

//ws
const wsServer = new WebSocket.Server({
  server,
});

wsServer.on('connection', (ws) => {
  console.log('connected ws');
  ws.on('message', (mess) => {
    console.log('i get mess');
    const { message } = JSON.parse(mess)
    console.log(message);
    console.log(wsServer.clients.size);
    wsServer.clients.forEach((client => {
      if (client.readyState === WebSocket.OPEN && client !== ws) {
        console.log('hey i send mess');
        client.send(JSON.stringify({ message }))
      }
    }))
  })
})

wsServer.on('close', () => {
  console.log('good bye');
});

//server listen port
const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`)
})
