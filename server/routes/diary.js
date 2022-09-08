const {
  saveDiary,
  setMood,
  showDiaries,
} = require('../controllers/diaryController')

const router = require('express').Router()

router.post('/saveDiary', saveDiary)
router.post('/setMood', setMood)
router.get('/showDiaries', showDiaries)

module.exports = router
