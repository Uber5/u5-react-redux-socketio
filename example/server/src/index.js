import express from 'express'
import { Server as HttpServer } from 'http'
import SocketIO from 'socket.io'

const app = express()
const server = HttpServer(app)

const io = SocketIO(server)

const things = io.of('/things')
things.on('connection', socket => {
  console.log('connected to things')
  socket.on('disconnect', () => console.log('somebody disconnected', socket.id))
})

setInterval(() => {
  things.emit('now', { now: new Date() })
}, 1000)

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`listening on port ${ port }`))
