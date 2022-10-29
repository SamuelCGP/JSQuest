import express, { Express, Request, Response } from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import verifyJWT from "./middlewares/verifyJWT";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
dotenv.config({ path: "./src/config/.env" });

import { router as userRouter } from "./routes/user";
import { router as chapterRouter } from "./routes/chapter";
import { router as solutionRouter } from "./routes/solution";
import { router as lessonRouter } from "./routes/lesson";

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(express.static(path.resolve(__dirname, "../client/build")));

const router = express.Router();

router.use("/images", express.static(path.join(__dirname, "images")));

router.use("/user", userRouter);
router.use("/chapter", chapterRouter);
router.use("/solution", solutionRouter);
router.use("/lesson", lessonRouter);

router.get("/verify-token", verifyJWT, (req, res) => {
	res.status(200).send();
});

app.use("/api", router);

app.get("*", (req, res) =>
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
);

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}!`));

//TODO: fazer com que os as lições e caps peguem os icones do servidor