import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://169.254.66.66:8888',
  // withCredentials: true // 跨域类型时是否在请求中协带cookie
})
const getNewHeaders = () =>{
  return {'x-nideshop-token': window.localStorage.getItem('token')}
}
export default class HttpUtil {
  static get (url: string, params = {}) {
    return new Promise((resolve, reject) => {
      instance.get(url, { params, headers: getNewHeaders() },).then(({ data }) => {
        if(data.errno === 0){
          resolve(data.data)
        }else{
          resolve(data)
        }
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
  static post (url: string, params = {}) {
    return new Promise((resolve, reject) => {
      instance.post(url, { ...params },{headers: getNewHeaders()}).then(({ data }) => {
        resolve(data)
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
}