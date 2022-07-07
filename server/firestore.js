
const firebaseConfig = require('./src/config/serviceAccountKey.json');

const firebase = require('firebase-admin')
firebase.initializeApp({
    credential: firebase.credential.cert(firebaseConfig)
});

const db = firebase.firestore();
exports.db = db

exports.save = async function (collectionName, data, docId=undefined) {
    const collection = db.collection(collectionName);
    const doc = docId ? collection.doc(docId) : collection.doc();
    console.log('saving')
    await doc.set(data);
}

exports.update = async function (collectionName, data, docId=undefined) {
    const collection = db.collection(collectionName);
    const doc = docId ? collection.doc(docId) : collection.doc();
    await doc.update(data);
}

exports.getCollection = async function (collectionName) {
    return await db.collection(collectionName).get()
}

exports.getDocById = async function (collectionName, docId) {
    return await db.collection(collectionName).doc(docId).get();
}

exports.deleteDocById = async function (collectionName, docId) {
    return await db.collection(collectionName).doc(docId).delete();
}