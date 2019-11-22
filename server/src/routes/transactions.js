const Router = require('express');
const router = Router();

const { getTransactions,getAllHistory, createTransactions, getOneTransactions, deleteTransactions, updateTransactions } = require('../controllers/transactions.controller');

// /api/transactions/
router.get('/', getTransactions);
router.post('/', createTransactions);

// /api/transactions/id
router.get("/history/:id", getAllHistory)
router.get('/:id', getOneTransactions);
router.delete('/:id', deleteTransactions);
router.put('/:id', updateTransactions);

module.exports = router;