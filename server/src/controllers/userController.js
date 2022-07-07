const bcrypt = require("bcrypt");
const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

exports.register = async function (req, res) {
	const salt = await bcrypt.genSalt();
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	userModel.create(req.body.username, req.body.email, hashedPassword)
        .then(() => {
            res.status(200).json({message: "User successfully registered"});
        }, error => {
            res.status(400).send(error);
        });
};

exports.login = async function (req, res) {
    const body = req.body;
    const user = await userModel.getByEmail(body.email)
    const userData = user.data();
    if(user) {
        const isPasswordValid = await bcrypt.compare(body.password, userData.password);
        if(isPasswordValid) {
            const userId = userData.id          
            const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
                expiresIn: 300
            });
            res.status(200).json({message: "Login successful", token });
        } else {
            res.status(401).json({message: "Invalid password"});
        }
    } else {
        res.status(404).json({message: "User does not exist"});
    }
}