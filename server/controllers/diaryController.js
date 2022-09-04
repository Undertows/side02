const diaryModel = require('../models/diaryModel')
const diary = require('../models/diaryModel')

module.exports.saveDiary = async (req, res, next) => {
  try {
    const { content } = req.body
    const diaryObj = await diary.create({ content: content, date: Date.now() })
    return res.json({ msg: '日记保存成功。', diaryObj })
  } catch (e) {
    next(e)
  }
}
