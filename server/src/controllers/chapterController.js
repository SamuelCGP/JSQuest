const chapterModel = require("../models/chapterModel.js");

exports.getAll = async function (req, res) {
    const chapters = await chapterModel.getAll(req.userId);
    res.status(200).json({ chapters })
}

exports.getOne = async function (req, res) {
    const chapterId = req.params.id;

    const chapter = await chapterModel.getOne(chapterId);

    if (chapter) res.status(200).json({ chapter });
    else res.status(400).json({ message: "Invalid chapter ID" });
}
