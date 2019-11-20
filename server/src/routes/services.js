const Router = require('express');
const router = Router();

const {
  getServices,
  createServices,
  getOneServices,
  deleteServices,
  updateServices
} = require('../controllers/services.controller');

// /api/news/
router.get('/', getServices);
router.post('/', createServices);

// /api/news/id
router.get('/:id', getOneServices);
router.delete('/:id', deleteServices);
router.put('/:id', updateServices);

module.exports = router;