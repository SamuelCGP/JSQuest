const express = require('express');
const router = express.Router();

const chapterController = require('../controllers/chapterController.js');

router.get('/all', chapterController.getAll);
router.get('/', chapterController.getOne);

module.exports = router;