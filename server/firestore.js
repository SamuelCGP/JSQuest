
const firebaseConfig = require('./src/config/serviceAccountKey.json');

const firebase = require('firebase-admin');
firebase.initializeApp({
    credential: firebase.credential.cert(firebaseConfig)
});

const db = firebase.firestore();
exports.db = db

exports.save = async function (collectionName, data, docId=undefined) {
    const collection = db.collection(collectionName);
    const doc = docId ? collection.doc(docId) : collection.doc();
    await doc.set(data);
}

exports.update = async function (collectionName, data, docId) {
    const collection = db.collection(collectionName);
    const doc = collection.doc(docId);
    await doc.update(data);
}

exports.getCollection = async function (collectionName) {
    return await db.collection(collectionName).get()
}

exports.getAllFromCollection = async function (collectionName) {
    const collection = await exports.getCollection(collectionName);
    const docs = [];
    collection.forEach(doc => {
        docs.push({id: doc.id, data: doc.data()});
    })

    return docs;
}

exports.getDocById = async function (collectionName, docId) {
    return await db.collection(collectionName).doc(docId).get();
}

exports.deleteDocById = async function (collectionName, docId) {
    return await db.collection(collectionName).doc(docId).delete();
}