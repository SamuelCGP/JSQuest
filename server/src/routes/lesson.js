const express = require("express");
const { getOne, saveSolution } = require("../controllers/lessonController");
const verifyJWT = require("../middlewares/verifyJWT");
const router = express.Router();

router.get("/:chapterIndex/:lessonIndex", verifyJWT, getOne);
router.post("/:chapterIndex/:lessonIndex/", verifyJWT, saveSolution);

module.exports = router;
