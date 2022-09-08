const diary = require('../models/diaryModel')

module.exports.saveDiary = async (req, res, next) => {
  try {
    const diaryObj = await diary.create({
      content: req.body.content,
      date: Date.now(),
    })
    return res.json({ msg: '日记保存成功。', diaryObj })
  } catch (e) {
    next(e)
  }
}

module.exports.setMood = (req, res) => {
  //卧槽，这个bug太难发现了，不用async竟然不会执行语句。(不用async的话也可以用.then)
  diary
    .findByIdAndUpdate(req.body.id, { mood: req.body.mood })
    .then(() => res.json({ msg: '日记保存成功。' }))
}

module.exports.showDiaries = (_, res) => {
  diary.find({}, (err, diaries) => {
    if (!err) return res.json(diaries)
    /* res.json不写{}直接返回memos的原型,在这里是一个无名数组
    写{memos}返回key为memos的对象 */
  })
}
