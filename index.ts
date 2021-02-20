import { Socket } from 'socket.io'
import initSocket from './socket'
import App from './app'

const app = new App(3001)

app.listen((socket: Socket) => {
  initSocket.setSocket = socket
  initSocket.onTest()
  initSocket.emitData()
})
