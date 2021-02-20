import express, { Application } from 'express'
import { Server, Socket } from 'socket.io'

class App {
  private app: Application

  private port: number

  private server: any

  private io: Server

  constructor(port:number) {
    if(!this.app) {
      this.app = express()
      this.port = port
    }
  }

  public listen(callback: Function) {
    this.server = this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })

    this.io = new Server(this.server)
    this.io.on('connection', (socket: Socket) => {
      callback(socket)
    })

  }
}

export default App