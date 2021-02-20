import { Socket } from 'socket.io'
import binance from './market'

class InitSocket {
  
  private socket: Socket

  public market

  constructor(market: any) {
    this.market = market
  }
  set setSocket(socket: Socket) {
    this.socket = socket
  }
  
  get getSocket() {
    return this.socket
  }
  
  public onTest() {
    this.socket.on('test', (text: string) => {
      console.log(text)
    })
  }
  public emitData() {
    this.market.futuresTickerStream( 'BTCUSDT', console.log );
  }
}

const initSocket = new InitSocket(binance)

export default initSocket