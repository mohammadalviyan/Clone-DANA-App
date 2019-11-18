const Router = require('express');
const router = Router();

const {
  getVouchers,
  createVouchers,
  getOneVouchers,
  deleteVouchers,
  updateVouchers
} = require ('../controllers/vouchers.controller');

// /api/vouchers/
router.get('/', getVouchers);
router.post('/', createVouchers);

// /api/vouchers/id
router.get('/:id', getOneVouchers);
router.delete('/:id', deleteVouchers);
router.put('/:id', updateVouchers);

module.exports = router;