const mongoose = require('mongoose')

const diarySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    // max: 9999,
    // unique: true,
  },
  date: {
    /** 如果定义为Number型，controller里Date.now()获得的数据
     *   存入数据库会变成时间戳格式。前端再获取是number型。
     *   如果定义为Date型，存入数据库会转换成可读的时间格式。
     *   前端再获取是string型。
     *   如果定义为String型，存入数据库会变成时间戳格式。
     *   前端再获取是string型。
     */
    type: Date,
    required: true,
  },
  mood: {
    type: String,
    default: '',
  },
  hashTags: [String],
})

module.exports = mongoose.model('Diary', diarySchema)
