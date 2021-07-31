require('dotenv').config()
const mongoose = require('mongoose')

const DB_HOST = process.env.DB_HOST
const PORT = process.env.PORT

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
    mongoose.connect(`mongodb://${DB_HOST}:${PORT}/notedly`).catch(err => {
      console.log('mongoose connection error: ', err);
      process.exit();
    });
  }
}
