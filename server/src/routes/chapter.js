const express = require('express');
const router = express.Router();

const chapterController = require('../controllers/chapterController.js');
const verifyJWT = require("../middlewares/verifyJWT");

router.get('/all', verifyJWT, chapterController.getAll);
router.get('/:id', verifyJWT, chapterController.getOne);

module.exports = router;