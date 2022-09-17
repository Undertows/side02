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

/* res.json不写{}直接返回memos的原型,在这里是一个无名数组
写{memos}返回key为memos的对象 */
//少写params.byWhat浪费一个多小时。。。
module.exports.showDiaries = (req, res) => {
  let byWhat = req.params.byWhat
  let subC = req.query.subCondi
  let condition = undefined

  if (byWhat == 'all') {
    condition = {}
  } else if (byWhat == 'mood') {
    condition = { mood: subC }
  } else if (byWhat == 'date') {
    condition = { date: { $ne: `2022-0${subC}-17 14:16:31.000` } }
  }
  diary.find(condition, (err, diaries) => {
    if (!err) return res.json(diaries)
  })
}
