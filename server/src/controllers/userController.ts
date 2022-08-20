import { NextFunction, Request, Response } from "express";

import bcrypt from "bcrypt";
import * as userModel from "../models/userModel";
import jwt from "jsonwebtoken";

export const getUserByQuery = async (req: Request, res: Response) => {
	const queryId = req.query.id as string;
	const queryEmail = req.query.email as string;

	if (queryId) {
		const user = await userModel.getById(queryId);
		if (user) return res.status(200).json({ user: user.data() });
	} else if (queryEmail) {
		const user = await userModel.getByEmail(queryEmail);
		if (user) return res.status(200).json({ user: user.data() });
	} else
		return res
			.status(400)
			.json({ message: "Missing id or email query params" });

	res.status(404).json({ message: "User not found" });
};

export const getUserByIdParam = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userId = req.params.userId;
	const user = await userModel.getById(userId);

	if (user) {
		req.user = user;
		next();
	} else res.status(404).json({ message: "Invalid user ID" });
};

export const register = async (req: Request, res: Response) => {
	const body = req.body;
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(body.password, salt);

	userModel.create(body.username, body.email, hashedPassword).then(
		() => res.status(201).json({ message: "User successfully registered" }),
		(error) => res.status(400).json({ message: error })
	);
};

export const getUserFromBody = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const body = req.body;
	const email = body.email;
	const userId = body.userId;

	let user;

	if (email) user = await userModel.getByEmail(email);
	else if (userId) user = await userModel.getById(userId);

	if (user) {
		req.user = user;
		next();
	} else res.status(404).json({ message: "User does not exist" });
};

export const login = async (req: Request, res: Response) => {
	const body = req.body;
	const user = req.user;
	const userData = user.data();
	const isPasswordValid = await bcrypt.compare(
		body.password,
		userData.password
	);
	if (isPasswordValid) {
		const userId = user.id;
		const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
			expiresIn: "1d",
		});
		res.status(200).json({ message: "Login successful", token });
	} else {
		res.status(401).json({ message: "Invalid password" });
	}
};

//recebe o email do usuário para enviar o link de reset de senha
export const forgotPassword = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
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
		const link = `http://${process.env.FRONT_END_URL}/reset-password/${userId}/${token}`;

		req.toEmailAdress = email;
		req.emailSubject = "JSQuest Password Reset";
		req.emailMessage = `You recently requesty a password reset for your account at our website. Click the following link to choose a new password:<br/> ${link}`;
		next(); //passa o controle para o middleware sendEmail
		res.status(200).json({ message: "Reset link sent to email" });
	} else res.status(404).json({ message: "User does not exist" });
};

export const resetPassword = async (req: Request, res: Response) => {
	const newPassword = req.body.newPassword;

	const userId = req.user.id;

	const salt = await bcrypt.genSalt(10);
	const hashedNewPassword = await bcrypt.hash(newPassword, salt);

	userModel.updateById(userId, { password: hashedNewPassword });

	res.status(200).json({ message: "Password updated successfully" });
};

export const verifyPasswordResetJWT = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers["x-access-token"] as string;

	if (!token) {
		res.status(400).json({ message: "Missing access token" });
	} else {
		const userData = req.user.data();
		const secret: string = process.env.JWT_SECRET! + userData.password;
		jwt.verify(token, secret, (error, decoded) => {
			if (error) res.status(401).json({ message: "Invalid access token" });
			else {
				next();
				if (!res.headersSent) res.status(200).send("Access granted");
			}
		});
	}
};

export const sendEmailConfirmation = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = req.user;
	req.toEmailAdress = req.body.email;
	req.emailSubject = "JSQuest Email Confirmation";

	const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
		expiresIn: "5m",
	});
	const link = `http://${process.env.FRONT_END_URL}/confirm-email/${token}`;
	req.emailMessage =
		"Here is your email confirmation link for JSQuest: " + link;

	next();

	res.status(200).json({ message: "Confirmation email sent" });
};

export const checkEmailConfirmed = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (await userModel.isEmailConfirmed(req.user.id)) {
		next();
	} else res.status(401).json({ message: "Email not confirmed" });
};

export const confirmEmail = async (req: Request, res: Response) => {
	if (await userModel.isEmailConfirmed(req.userId))
		res.status(400).json({ message: "Email was already confirmed" });
	else {
		await userModel.confirmEmail(req.userId);
		res.status(200).json({ message: "Email confirmed" });
	}
};

export const getOne = async (req: Request, res: Response) => {
	const queryId = req.query.id as string;
	const queryEmail = req.query.email as string;

	if (queryId) {
		const user = await userModel.getById(queryId);
		if (user) return res.status(200).json({ user: user.data() });
	} else if (queryEmail) {
		const user = await userModel.getByEmail(queryEmail);
		if (user) return res.status(200).json({ user: user.data() });
	} else
		return res
			.status(400)
			.json({ message: "Missing id or email query params" });

	res.status(404).json({ message: "User not found" });
};

export const getAll = async (req: Request, res: Response) => {
	const users = await userModel.getAll();
	res.status(200).json({ users });
};
