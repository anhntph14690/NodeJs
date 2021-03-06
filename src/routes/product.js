import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { checkAuth, isAdmin, isAuth, requiredSigin } from '../middlewares/checkAuth';
import { userById } from '../controllers/user';

const router = Router();

router.get('/products', list);
router.post('/products/', create);
// router.post('/products/:userId', requiredSigin, isAuth, isAdmin, create);
router.get('/products/:id', checkAuth, get);
router.delete('/products/:id', checkAuth, remove);
router.put('/products/:id', checkAuth, update);

router.param('userId', userById)

export default router;