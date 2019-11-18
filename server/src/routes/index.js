import { Router } from 'express';
const router = Router();
import  verify from '../middleware/verifyToken';

// Routes all
import userRouter from './users';
import newsRouter from './news';

router.use('/user', userRouter);
router.use('/news', newsRouter);

export default router;