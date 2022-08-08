const express = require("express");
const router = express.Router();

const solutionController = require("../controllers/solutionController");
const verifyJWT = require("../middlewares/verifyJWT");

router.get("/:chapterIndex/:lessonIndex/", verifyJWT, solutionController.getOne);
router.post("/:chapterIndex/:lessonIndex/", verifyJWT, solutionController.save);

module.exports = router;
