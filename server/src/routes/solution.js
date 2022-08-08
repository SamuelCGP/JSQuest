const express = require("express");
const router = express.Router();

const solutionController = require("../controllers/solutionController");

router.get("/:chapterIndex/:lessonIndex/:userId", solutionController.getOne);
router.post("/:chapterIndex/:lessonIndex/:userId", solutionController.save);

module.exports = router;
