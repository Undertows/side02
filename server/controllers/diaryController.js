const diary = require('../models/diaryModel')

module.exports.test = () => {
  let now = new Date() //数据库里的时间格式和new Date()得到的一样(utc时间?)
  now.setFullYear(2022, 8, 20)
  diary.find({ date: { $gte: now } }, (e, d) => {
    let dd = d.map(ds => ds.content)
    console.log(dd)
  })
}
//async写法
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
//.then写法
module.exports.setMood = (req, res) => {
  //卧槽，这个bug太难发现了，不用async竟然不会执行语句。(不用async的话也可以用.then)
  diary
    .findByIdAndUpdate(req.body.id, { mood: req.body.mood })
    .then(() => res.json({ msg: '日记保存成功。' }))
}
//callback写法
/* res.json不写{}直接返回memos的原型,在这里是一个无名数组
写{memos}返回key为memos的对象 */
//少写params.byWhat浪费一个多小时。。。
module.exports.showDiaries = (req, res) => {
  let { byWhat } = req.params
  let subCondition = req.body
  let condition = undefined
  console.log(subCondition)

  if (byWhat === 'all') condition = {}
  else if (byWhat === 'mood') condition = subCondition
  else if (byWhat === 'date') {
    let { year, month, date } = subCondition
    let now = new Date()
    now.setFullYear(year, month - 1, date)
    condition = { date: { $gte: now } }
  }
  diary.find(condition, (err, diaries) => {
    if (!err) return res.json(diaries)
  })
}
