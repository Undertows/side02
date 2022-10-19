const {
  saveDiary,
  setMood,
  showDiaries,
  deleteDiary,
  test,
  handleHashTag,
} = require('../controllers/diaryController')

const router = require('express').Router()

router.post('/saveDiary', saveDiary)
router.post('/setMood', setMood)
router.post('/showDiaries/:byWhat', showDiaries)
router.delete('/deleteDiary', deleteDiary)
router.get('/test', test)
router.put('/handleTag', handleHashTag)

module.exports = router
