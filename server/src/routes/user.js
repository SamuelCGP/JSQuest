const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer();

const userController = require("../controllers/userController.js");

const sendEmail = require("../middlewares/sendEmail.js");
const verifyJWT = require("../middlewares/verifyJWT.js");

//recebe o ID do usuário (pelo url param) e o token de reset de senha (pelo header x-access-token)
//caso o id do usuário seja invalido, retorna o código 404
//caso o token seja invalido, retorna o codigo 401
router.get(
	"/verify-password-reset-token/:userId",
	userController.getUserByIdParam,
	userController.verifyPasswordResetJWT
);

//retorna todos os usuários cadastrados
router.get('/all', userController.getAll);

//recebe o id ou email do usuário via query params (ex: http://localhost:3001/user?id=aksajkasjk
//ou http://localhost:3001/user?email=test)
router.get("/", userController.getUserByQuery);

//registrar usuário -> recebe um formulário com os campos "username", "email" e "password"
//caso o registro seja bem-sucedido, retorna o código 201
//caso o usuário já exista, retorna o código 400
router.post("/register", upload.none(), userController.register);

//realizar login do usuário -> recebe um formulário com os campos "email" e "password"
//caso o usuário não exista, retorna o código 404
//caso a senha esteja incorreta, retorna o código 401
router.post(
	"/login",
	upload.none(),
	userController.getUserFromBody,
	userController.checkEmailConfirmed,
	userController.login
);

//recebe o email do usuário para enviar o link de reset de senha
//retorna 404 se o email for inválido
router.post(
	"/forgot-password",
	upload.none(),
	userController.forgotPassword,
	sendEmail
);

//recebe o "userId" e "newPassword" no body, e o token de reset de senha (pelo header x-access-token)
//retorna 401 se o token for inválido
//retorna 404 se o userId for inválido
router.post(
	"/reset-password",
	upload.none(),
    userController.getUserFromBody,
	userController.verifyPasswordResetJWT,
	userController.resetPassword
);

//recebe o email do usuário para enviar o email de confirmação
router.post(
	"/send-email-confirmation",
	upload.none(),
    userController.getUserFromBody,
	userController.sendEmailConfirmation,
	sendEmail
);

//recebe o token de confirmação de email pelo header x-access-token
//retorna 400 se o email já estiver confirmado
//retorna 401 se o token for inválido
router.post("/confirm-email", upload.none(), verifyJWT, userController.confirmEmail)

module.exports = router;
