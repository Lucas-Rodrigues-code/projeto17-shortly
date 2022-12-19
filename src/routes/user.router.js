import { Router } from "express";
import userValidation from '../middlewares/user.middleware.js'
import signUp from '../controllers/user.controller.js';

const router = Router();

router.post("/sign-up",  userValidation, signUp)
router.post("/sign-in", /* signInBodyValidation, signIn */)

export default router;