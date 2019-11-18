import { Router } from 'express';
const router = Router();

import { getNews, createNews, getOneNews, deleteNews, updateNews } from '../controllers/news.controller';

// /api/news/
router.get('/', getNews);
router.post('/', createNews);

// /api/news/id
router.get('/:id', getOneNews);
router.delete('/:id', deleteNews);
router.put('/:id', updateNews);

export default router;