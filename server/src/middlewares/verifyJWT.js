const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
	const token = req.headers["authorization"].split(" ")[1];

	if (!token) {
		res.status(400).json({ message: "Missing access token" });
	} else {
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
