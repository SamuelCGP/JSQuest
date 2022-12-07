import {
	save,
	db,
	getDocById,
	update,
	getAllFromCollection,
	getDocRefById,
	FirestoreData,
} from "../firestore";

const userCollectionName = "users";

export const create = async (username: string, email: string, password: string) => {
	const userExists = await getByEmail(email);

	if (!userExists)
		await save(userCollectionName, {
			username,
			email,
			password,
			emailConfirmed: false,
			completedLessons: []
		});
	else throw "User already exists";
}

export const getByEmail = async (email: string) => {
	const snapshot = await db
		.collection(userCollectionName)
		.where("email", "==", email)
		.get();

	if (snapshot.empty) return false;
	else return snapshot.docs[0];
}

export const getById = async (id: string) => {
	const user = await getDocById(userCollectionName, id);
	if (user.exists) return user;
	else return false;
}

export const getRefById = async (id: string) => {
	const userRef = await getDocRefById(userCollectionName, id);
	return userRef;
}

export const getAll = async () => {
	return await getAllFromCollection(userCollectionName);
}

export const updateById = async (id: string, data: FirestoreData) => {
	await update(userCollectionName, data, id);
}

export const isEmailConfirmed = async (id: string) => {
	const user = await getById(id);

	if (user) {
		const userData = user.data()!;
		return userData.emailConfirmed;
	}
}

export const confirmEmail = async (id: string) => {
	await updateById(id, { emailConfirmed: true });
}