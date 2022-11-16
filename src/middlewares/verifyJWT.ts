import { NextFunction, Request, Response } from "express";

import jwt, { JwtPayload } from "jsonwebtoken";

export default function (req: Request, res: Response, next: NextFunction) {
	let token = req.headers["authorization"];
	console.log("ta batendo aqui");

	const redirectTo = `${req.get("origin")}/login`;
	console.log(redirectTo);

	if (!token) {
		res.append("location", redirectTo);
		res.status(200).send();
	} else {
		token = token.split(" ")[1];
		jwt.verify(token, process.env.JWT_SECRET!, (error, decoded) => {
			if (error) {
				res.append("location", redirectTo);

				res.status(200).send();
			} else {
				const decodedPayload = decoded as JwtPayload;

				req.userId = decodedPayload!.userId;
				next();
			}
		});
	}
}
