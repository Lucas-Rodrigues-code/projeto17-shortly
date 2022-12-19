import { Router } from "express";
import useRouter from './user.router.js';
const router = Router();

router.use(useRouter);

export default router;