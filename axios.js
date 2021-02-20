import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.binance.com/api/v3/',
  timeout: 10000,
})

api.get('ping').then(
  () => console.log('REST API Connection Success!!')
  ).catch(error => console.log(error))

export default api