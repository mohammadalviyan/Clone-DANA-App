const Router = require('express');
const router = Router();

const { getNews } = require("../controllers/news.controller");

// /api/news/
router.get('/', getNews);
// router.post('/', createNews);

// /api/news/id
// router.get('/:id', getOneNews);
// router.delete('/:id', deleteNews);
// router.put('/:id', updateNews);

module.exports = router;