import sgmail from "@sendgrid/mail";
import { NextFunction, Request, Response } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
	sgmail.setApiKey(process.env.SENDGRID_API_KEY!);

	const message = {
		to: req.toEmailAdress,
		from: "lollymoney3@gmail.com",
		subject: req.emailSubject,
		text: req.emailMessage,
		html: req.emailMessage,
	};

	sgmail
		.send(message)
		.then((response) => console.log("email sent to " + req.toEmailAdress))
		.catch((error) => console.error(error));
};
