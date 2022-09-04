const { saveDiary, setMood } = require('../controllers/diaryController')

const router = require('express').Router()

router.post('/saveDiary', saveDiary)
router.post('/setMood', setMood)

module.exports = router
