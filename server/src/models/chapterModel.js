const { getAllFromCollection, getDocById } = require("../../firestore")

const chapterCollectionName = 'chapters';

async function getAll() {
    return await getAllFromCollection(chapterCollectionName);
}

async function getOne(chapterId) {
    return await getDocById(chapterId);
}

module.exports = { getAll, getOne }