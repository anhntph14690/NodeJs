import { Router } from 'express';
import { register, login } from '../controllers/auth';
// import { logins } from '../controllers/user';
const router = Router();

router.post('/signup', register);
router.post('/signin', login);


// router.post('/register', register);
// router.get('/logins', logins);

export default router;