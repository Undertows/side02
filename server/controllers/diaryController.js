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

module.exports.setMood = async (req, res, next) => {
  console.log(req.body)
  try {
    const { mood } = req.body
    const id = req.body.id
    const diaryObj = await diary.findByIdAndUpdate(
      id,
      { mood: mood },
      { new: true }
    )
    return res.json({ msg: '日记保存成功。' })
  } catch (e) {
    next(e)
  }
}
