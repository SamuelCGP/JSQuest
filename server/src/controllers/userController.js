const bcrypt = require("bcrypt");
const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

exports.register = async function (req, res) {
	const body = req.body;
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(body.password, salt);

	userModel.create(body.username, body.email, hashedPassword).then(
		() => {
			res.status(201).json({ message: "User successfully registered" });
		},
		(error) => {
			res.status(400).json({ message: error });
		}
	);
};

exports.login = async function (req, res) {
	const body = req.body;
	const user = await userModel.getByEmail(body.email);
	if (user) {
		const userData = user.data();
		const isPasswordValid = await bcrypt.compare(
			body.password,
			userData.password
		);
		if (isPasswordValid) {
			const userId = userData.id;
			const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
				expiresIn: 300,
			});
			res.status(200).json({ message: "Login successful", token });
		} else {
			res.status(401).json({ message: "Invalid password" });
		}
	} else {
		res.status(404).json({ message: "User does not exist" });
	}
};

//recebe o email do usuário para enviar o link de reset de senha
exports.forgotPassword = async function (req, res, next) {
	const body = req.body;
	const email = body.email;

	const user = await userModel.getByEmail(email);

	if (user) {
		//usuário existe

		const userData = user.data();
		console.log(user.id);
		const userId = user.id;
		const password = userData.password;
		const secret = process.env.JWT_SECRET + password;
		const token = jwt.sign({ email, userId }, secret, { expiresIn: "5m" });
		const link = `http://localhost:3000/reset-password/${userId}/${token}`;

		req.toEmailAdress = email;
		req.emailSubject = "JSQuest Password Reset";
		req.emailMessage = `You recently requesty a password reset for your account at our website. Click the following link to choose a new password:<br/> ${link}`;
		next(); //passa o controle para o middleware sendEmail
		res.status(200).json({ message: "Reset link sent to email" });
	} else {
		res.status(404).json({ message: "User does not exist" });
	}
};

exports.verifyUserId = async function (req, res, next) {
	const userId = req.params.userId;

	const user = await userModel.getById(userId);
	if (user) {
		const userData = user.data();
		req.password = userData.password;
		next();
		if (!res.headersSent) res.status(200).json({ message: "Access granted" });
	} else {
		res.status(404).json({ message: "Invalid user ID" });
	}
};

exports.resetPassword = async function (req, res, next) {
	const newPassword = req.body.newPassword;

	const userId = req.body.userId;

	const user = await userModel.getById(userId);
	if (user) {
		console.log("user");
		const userData = user.data();
		req.password = userData.password;
		console.log(userData.password);
		next();
		if (!res.headersSent) {
			const salt = await bcrypt.genSalt(10);
			const hashedNewPassword = await bcrypt.hash(newPassword, salt);

			userModel.updateById(req.userId, { password: hashedNewPassword });

			res.status(200).json({ message: "Password updated successfully" });
		}
	} else {
		res.status(404).json({ message: "Invalid user ID" });
	}
};

exports.getUser = async function (req, res) {
    const queryId = req.query.id;
    const queryEmail = req.query.email;

    if(queryId) {
        const user = await userModel.getById(queryId);
        if(user) return res.status(200).json({user: user.data()});
    } else if (queryEmail) {
        const user = await userModel.getByEmail(queryEmail);
        if(user) return res.status(200).json({user: user.data()});
    } else return res.status(400).json({message: "Missing id or email query params"});

    res.status(404).json({message: "User not found"});

}

exports.getAllUsers = async function (req, res) {
	const users = await userModel.getAll();
	res.status(200).json({ users });
};
