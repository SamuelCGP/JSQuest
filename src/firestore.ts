const firebaseConfig = require("../serviceAccountKey.json");

import firebase from "firebase-admin";
firebase.initializeApp({
	credential: firebase.credential.cert(firebaseConfig),
});

export const db = firebase.firestore();

export interface FirestoreData {
	[x: string]: any;
}

export const save = async function (
	collectionName: string,
	data: FirestoreData,
	docId: string = ""
) {
	const collection = db.collection(collectionName);
	const doc = docId ? collection.doc(docId) : collection.doc();
	await doc.set(data);
};

export const update = async function (
	collectionName: string,
	data: FirestoreData,
	docId: string
) {
	const collection = db.collection(collectionName);
	const doc = collection.doc(docId);
	await doc.update(data);
};

export const getCollection = async function (
	collectionName: string
): Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>> {
	return await db.collection(collectionName).get();
};

export const getAllFromCollection = async function (collectionName: string) {
	const collection: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData> =
		await exports.getCollection(collectionName);

	interface FirestoreDoc {
		id: string;
		data: FirebaseFirestore.DocumentData;
	}

	const docs: Array<FirestoreDoc> = [];
	collection.forEach(
		(
			doc: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>
		) => {
			const docData: FirestoreDoc = { id: doc.id, data: doc.data() };
			docs.push(docData);
		}
	);

	return docs;
};

export const getDocById = async function (
	collectionName: string,
	docId: string
): Promise<FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>> {
	return await db.collection(collectionName).doc(docId).get();
};

export const getDocRefById = async function (
	collectionName: string,
	docId: string
): Promise<
	FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>
> {
	return await db.collection(collectionName).doc(docId);
};

export const deleteDocById = async function (
	collectionName: string,
	docId: string
): Promise<void> {
	await db.collection(collectionName).doc(docId).delete();
};
