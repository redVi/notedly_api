require('dotenv').config()
const mongoose = require('mongoose')

const PORT = process.env.PORT
const HOST = process.env.DB_HOST
const NAME = process.env.DB_NAME
const USER = process.env.DB_USERNAME
const PASS = process.env.DB_PASSWORD

module.exports = {
  connect: () => {
    // Используем обновленный парсер строки URL драйвера Mongo
    mongoose.set('useNewUrlParser', true);

    // Поставим findOneAndUpdate () вместо findAndModify ()
    mongoose.set('useFindAndModify', false);

    // Поставим createIndex () вместо sureIndex ()
    mongoose.set('useCreateIndex', true);

    // Используем новый механизм обнаружения и мониторинга серверов
    mongoose.set('useUnifiedTopology', true);

    // Подключаемся к БД
    mongoose.connect(`mongodb://${USER}:${PASS}@${HOST}:${PORT}/${NAME}`)
      .catch(err => {
        console.log('mongoose connection error: ', err);
        process.exit();
      });
  }
}
