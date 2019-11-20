const Router = require('express');
const router = Router();
const { upload } = require('../middleware/uploadImage');

const {
  getVouchers,
  createVouchers,
  getOneVouchers,
  deleteVouchers,
  updateVouchers
} = require ('../controllers/vouchers.controller');

// /api/vouchers/
router.get('/', getVouchers);
router.post('/', upload.single("image"), createVouchers);

// /api/vouchers/id
router.get('/:id', getOneVouchers);
router.delete('/:id', deleteVouchers);
router.put('/:id', upload.single("image"), updateVouchers);

module.exports = router;