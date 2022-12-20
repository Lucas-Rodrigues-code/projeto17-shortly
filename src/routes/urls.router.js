import { Router } from "express";
import validationPostShortenUrl from '../middlewares/urls.middleware.js';
import {postShortenUrl,getUrlById,getShortUrl} from '../controllers/urls.controller.js';
const router = Router();

router.post("/urls/shorten",validationPostShortenUrl,postShortenUrl)
router.get("/urls/:id",getUrlById)
router.get("/urls/open/:shortUrl",getShortUrl)

export default router;