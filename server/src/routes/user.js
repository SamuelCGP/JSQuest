const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();

const userController = require('../controllers/userController.js');

const sendEmail = require('../middlewares/sendEmail.js');
const verifyPasswordResetJWT = require('../middlewares/verifyPasswordResetJWT.js');

router.get('/verify-password-reset-token/:userId', userController.verifyUserId, verifyPasswordResetJWT);
//registrar usuário
router.post('/register', upload.none(), userController.register);

//realizar login do usuário
router.post('/login', upload.none(), userController.login)

//esqueceu a senha
router.post('/forgot-password', upload.none(), userController.forgotPassword, sendEmail);


router.post('/reset-password', upload.none(), userController.resetPassword, verifyPasswordResetJWT)

module.exports = router;