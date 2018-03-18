const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  // get post delete put patch
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
}
