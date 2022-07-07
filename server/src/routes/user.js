const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();


const userController = require('../controllers/userController.js');

//registrar usuário
router.post('/register', upload.none(), userController.register);

//realizar login do usuário
router.post('/login', upload.none(), userController.login)

module.exports = router;