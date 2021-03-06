const express = require('express')
// const mongoose = require('mongoose')
const WebSocket = require('ws');
const path = require('path')
const app = express()
const server = require('http').createServer(app)

// app.set('trust proxy', 1)
// app.set('sessionName', 'sid')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, './build')))

//ws
const wsSerever = new WebSocket.Server({
  server,
});

wsSerever.on('connection', (ws) => {
  ws.on('message', (message) => {
    wsSerever.clients.forEach((client => {
      client.send(JSON.stringify(message))
      // if (client.readyState === WebSocket.OPEN && client !== ws) {
      // }
    }))
  })
})

wsSerever.on('close', () => {
  console.log('good bye');
});


//server listen port
const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`)
})
