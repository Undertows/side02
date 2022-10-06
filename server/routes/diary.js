const {
  saveDiary,
  setMood,
  showDiaries,
  deleteDiary,
  test,
} = require('../controllers/diaryController')

const router = require('express').Router()

router.post('/saveDiary', saveDiary)
router.post('/setMood', setMood)
router.post('/showDiaries/:byWhat', showDiaries)
router.delete('/deleteDiary', deleteDiary)
router.get('/test', test)

module.exports = router
