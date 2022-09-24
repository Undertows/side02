const {
  saveDiary,
  setMood,
  showDiaries,
  delectDiary,
  test,
} = require('../controllers/diaryController')

const router = require('express').Router()

router.post('/saveDiary', saveDiary)
router.post('/setMood', setMood)
router.post('/showDiaries/:byWhat', showDiaries)
router.delete('/delectDiary', delectDiary)
router.get('/test', test)

module.exports = router
