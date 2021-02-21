import Binance from 'node-binance-api'
import dotenv from 'dotenv'
import './axios'
dotenv.config()

const binance = new Binance().options({
  APIKEY: process.env.BINANCE_APIKEY,
  APISECRET: process.env.BINANCE_SECRET,
  userServerTime: true,
})
binance.futuresChart( 'BTCUSDT', '1m', console.log );
export default binance
