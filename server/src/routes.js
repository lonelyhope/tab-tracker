const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookMarkController = require('./controllers/BookMarkController')
const HistoryController = require('./controllers/HistoryController')

module.exports = (app) => {
  // get post delete put patch
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
  // app.post('/login', AuthenticationController.removeDb)

  app.post('/songs', SongsController.post)
  app.get('/songs', SongsController.index)
  app.get('/songs/:songId', SongsController.show)
  app.put('/songs/:songId', SongsController.put)

  app.get('/bookmark/bookmark', BookMarkController.add)
  app.get('/bookmark/unbookmark', BookMarkController.delete)
  app.get('/bookmark/query', BookMarkController.query)
  app.get('/bookmark/getBookSongs', BookMarkController.getBookSongs)

  app.post('/historys', HistoryController.add)
  app.get('/historys', HistoryController.query)
}
