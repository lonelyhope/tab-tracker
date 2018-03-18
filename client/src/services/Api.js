import axios from 'axios'
// 导出一个axios对象，用于注册请求

export default () => {
  //   新建一个axios实例并返回
  return axios.create({
    baseURL: 'http://localhost:8088/' // 服务端地址
  })
}
