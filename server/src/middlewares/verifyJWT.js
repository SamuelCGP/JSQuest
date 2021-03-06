const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {
    const token = req.headers["x-access-token"];

    if(!token) {
        res.status(400).json({message: "Missing access token"})
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if(error) res.status(401).json({message: "Invalid access token"})
            else {
                req.userId = decoded.userId;
                next();
            }
        })
    }
}