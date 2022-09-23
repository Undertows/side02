const {
  saveDiary,
  setMood,
  showDiaries,
  test,
} = require('../controllers/diaryController')

const router = require('express').Router()

router.post('/saveDiary', saveDiary)
router.post('/setMood', setMood)
router.post('/showDiaries/:byWhat', showDiaries)
// router.get('/showDiaries', showDiaries)
router.get('/test', test)

module.exports = router
