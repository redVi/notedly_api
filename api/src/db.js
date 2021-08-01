const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL

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

    mongoose.connect(DATABASE_URL)
      .catch(err => {
        console.log('mongoose connection error: ', err);
        process.exit();
      });
  }
}
