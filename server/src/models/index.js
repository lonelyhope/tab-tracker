const fs = require('fs')
const path = require('path')
// const Sequelize = require('sequelize')
const mongoose = require('mongoose')
const config = require('../config/config')

const db = {}

// const sequelize = new Sequelize(
//   config.db.database,
//   config.db.user,
//   config.db.password,
//   config.db.options
// )

fs.readdirSync(__dirname) // 读取目录下的model文件
.filter((file) => 
  (file !== 'index.js') 
)
.forEach((file) => {
  const modelInfo = require(path.join(__dirname, file))
  console.log(modelInfo.name)
  db[modelInfo.name] = modelInfo.model // 将model加入db
})
// db.sequelize = sequelize
// db.Sequelize = Sequelize
Object.keys(db).forEach(modelName => {
  
})

db.mongoose = mongoose

module.exports = db
