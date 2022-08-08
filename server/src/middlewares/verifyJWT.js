const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
	let token = req.headers["authorization"];

	if (!token) {
		res.status(400).json({ message: "Missing access token" });
	} else {
        token = token.split(" ")[1];
		jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
			if (error)
				res.status(401).json({ message: "Invalid or expired access token" });
			else {
				req.userId = decoded.userId;
				next();
			}
		});
	}
};
