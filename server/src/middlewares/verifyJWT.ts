import { NextFunction, Request, Response } from "express";

import jwt, { JwtPayload } from "jsonwebtoken";

export default function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	let token = req.headers["authorization"];

	if (!token) {
		res.status(400).json({ message: "Missing access token" });
	} else {
		token = token.split(" ")[1];
		jwt.verify(token, process.env.JWT_SECRET!, (error, decoded) => {
			if (error)
				res.status(401).json({ message: "Invalid or expired access token" });
			else {
				const decodedPayload = decoded as JwtPayload;

				req.userId = decodedPayload!.userId;
				next();
			}
		});
	}
};
