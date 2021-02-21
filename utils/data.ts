import { BollingerBands, RSI } from 'technicalindicators'

class Data {
  private dataList: Array<any>
  private rsi: Array<number>
  private bb: Array<any>
  private ma: {
    period: string;
    values: Array<number>
  }

  constructor() {
    this.dataList = []
  }

  public update(data: any) {
    this.dataList.push(data)
  }

  public bolinger(values: Array<any>, period: number, stdDev: number) {
    this.bb = BollingerBands.calculate({ period, values, stdDev })
    return this.bb
  }

  public movingAverage() {

  }  

  public Rsi(values: Array<any>, period: number) {
    this.rsi = RSI.calculate({ values, period } )
    return this.rsi
  }
}

export default Data