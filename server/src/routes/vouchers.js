import {
  Router
} from 'express';
const router = Router();

import {
  getVouchers,
  createVouchers,
  getOneVouchers,
  deleteVouchers,
  updateVouchers
} from '../controllers/vouchers.controller';

// /api/vouchers/
router.get('/', getVouchers);
router.post('/', createVouchers);

// /api/vouchers/id
router.get('/:id', getOneVouchers);
router.delete('/:id', deleteVouchers);
router.put('/:id', updateVouchers);

export default router;