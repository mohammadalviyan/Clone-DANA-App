import express from 'express';
const router = express.Router();

// Routes all
const userRouter = require("./users");
import newsRouter from './news';

router.use('/user', userRouter);
router.use('/news', newsRouter);

export default router;