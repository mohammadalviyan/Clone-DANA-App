import express from 'express';
const router = express.Router();

// Routes all
import userRouter from './users';
import newsRouter from './news';

router.use('/user', userRouter);
router.use('/news', newsRouter);

export default router;