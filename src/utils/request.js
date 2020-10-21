// 封装 axios 模块      利用 axios.create 创建一个自定义的 axios
import axios from 'axios'
const http = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基地址
})
export default http
