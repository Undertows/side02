const { saveDiary } = require('../controllers/diaryController')

const router= require('express').Router()

router.post('/saveDiary',saveDiary)

module.exports = router;
