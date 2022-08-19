import express, {Express, Request, Response} from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import verifyJWT from "./middlewares/verifyJWT";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from 'path';
dotenv.config({ path: "./src/config/.env" });

import {router as userRouter} from "./routes/user";
import {router as chapterRouter} from "./routes/chapter";
import {router as solutionRouter} from "./routes/solution";
import {router as lessonRouter} from "./routes/lesson";

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));

var dir = path.join(__dirname, "images");

app.use('/images', express.static(dir));

app.use("/user", userRouter);
app.use("/chapter", chapterRouter);
app.use("/solution", solutionRouter);
app.use("/lesson", lessonRouter);

app.get("/verify-token", verifyJWT, (req, res) => {
	res.status(200).send();
});

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}!`));
