import Api from '@/services/Api'

export default {
//   提交注册内容
  register (credentials) { //向服务端发出请求
    return Api().post('/register', credentials)
  }
}
// AuthenticationService.register({
//   email: 'test@gmail.com',
//   username: 'name'
// })
