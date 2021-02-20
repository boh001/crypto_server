import { Socket } from "socket.io";

export const emitData = (socket: Socket, data: any) => {
  socket.emit('data', data)
}