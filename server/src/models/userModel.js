const {
	save,
	db,
	getDocById,
	update,
	getAllFromCollection,
} = require("../../firestore.js");

const userCollectionName = "users";

async function create(username, email, password) {
	const userExists = await getByEmail(email);

	if (!userExists)
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

async function getById(id) {
	const user = await getDocById(userCollectionName, id);
	if (user.exists) return user;
	else return false;
}

async function getAll() {
	return await getAllFromCollection(userCollectionName);
}

async function updateById(id, data) {
	await update(userCollectionName, data, id);
}

module.exports = { create, getByEmail, getById, updateById, getAll };
