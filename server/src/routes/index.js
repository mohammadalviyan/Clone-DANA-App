import { Router } from 'express';
const router = Router();

import  verify from '../middleware/verifyToken';

// Routes all
import userRouter from './users';
import newsRouter from './news';
import vouchersRouter from './vouchers';

// use route
router.use('/user', userRouter);
router.use('/news', newsRouter);
router.use('/vouchers', vouchersRouter);

export default router;