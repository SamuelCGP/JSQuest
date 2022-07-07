const { save, db } = require("../../firestore.js");

const userCollectionName = "users";

async function create(username, email, password) {
	if (!getByEmail(email))
		await save(userCollectionName, { username, email, password });
	else throw "User already exists";
}

async function getByEmail(email) {
	const snapshot = await db
		.collection(userCollectionName)
		.where("email", "==", email)
		.get();

	if (snapshot.empty) return false;
	else return snapshot.docs[0];
}

module.exports = { create, getByEmail };
