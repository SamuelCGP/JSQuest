import express from 'express';
export const router = express.Router();

import * as chapterController from '../controllers/chapterController';
import verifyJWT from "../middlewares/verifyJWT";

router.get('/all', verifyJWT, chapterController.getAll);
router.get('/:id', verifyJWT, chapterController.getOne);
router.post('/:id/create', chapterController.create);