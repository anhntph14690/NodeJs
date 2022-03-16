import { Router } from 'express';
import { signup, signin } from '../controllers/user';
import { checkAuth } from '../middlewares/checkAuth';

const router = Router();

router.post("/signup", signup);
router.get("/signin/:id", signin);


export default router;