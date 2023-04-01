const express = require('express')
const router = express.Router()
var tradesController = require('../controllers/trades')
router.get('/:id', tradesController.getById)

router.post('/', tradesController.create).get('/', tradesController.getAll)

module.exports = router
