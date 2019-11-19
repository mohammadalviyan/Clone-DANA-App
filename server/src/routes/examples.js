import {
  Router
} from 'express';
const router = Router();

import {
  getExample,
  createExample,
  getOneExample,
  deleteExample,
  updateExample
} from '../controllers/example.controller';

// /api/examples/
router.get('/', getExample);
router.post('/', createExample);

// /api/examples/id coba
router.get('/:id', getOneExample);
router.delete('/:id', deleteExample);
router.put('/:id', updateExample);

export default router;