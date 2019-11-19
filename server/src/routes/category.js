const Router = require('express');
const router = Router();

const {
  getCategory,
  createCategory,
  getOneCategory,
  deleteCategory,
  updateCategory
} = require('../controllers/categorytransactions');

// /api/news/
router.get('/', getCategory);
router.post('/', createCategory);

// /api/news/id
router.get('/:id', getOneCategory);
router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);

module.exports = router;