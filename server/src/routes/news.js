const Router = require('express');
const router = Router();
const { upload } = require('../middleware/uploadImage');

const {
  getNews,
  createNews,
  getOneNews,
  deleteNews,
  updateNews
} = require('../controllers/news.controller');

// /api/news/
router.get('/', getNews);
router.post('/', upload.single("image"),createNews);

// /api/news/id
router.get('/:id', getOneNews);
router.delete('/:id', deleteNews);
router.put('/:id', upload.single("image"), updateNews);

module.exports = router;