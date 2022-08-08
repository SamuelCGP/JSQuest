const { getAllFromCollection, getDocById } = require("../../firestore")

const chapterCollectionName = 'chapters';

exports.getAll = async () => {
    return await getAllFromCollection(chapterCollectionName);
}

exports.getOne = async (chapterId) => {
    return await getDocById(chapterId);
}