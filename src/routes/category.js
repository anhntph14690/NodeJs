import { Router } from 'express';
import { list, create, read } from '../controllers/category';

const router = Router();

router.get('/category', list);
router.post('/category', create);
router.get('/category/:id', read);


export default router;