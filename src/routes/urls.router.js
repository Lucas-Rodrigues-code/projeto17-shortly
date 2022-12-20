import { Router } from "express";
import validationPostShortenUrl from '../middlewares/urls.middleware.js';
import postShortenUrl from '../controllers/urls.controller.js';
const router = Router();

router.post("/urls/shorten",validationPostShortenUrl,postShortenUrl)


export default router;