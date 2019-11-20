const Router = require('express');
const router = Router();

const { getTransactions, createTransactions, getOneTransactions, deleteTransactions } = require('../controllers/transactions.controller');

// /api/news/
router.get('/', getTransactions);
router.post('/', createTransactions);

// /api/news/id
router.get('/:id', getOneTransactions);
router.delete('/:id', deleteTransactions);
// router.put('/:id', upload.single("image"), updateNews);

module.exports = router;