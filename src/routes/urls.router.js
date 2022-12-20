import { Router } from "express";
import validationPostShortenUrl from '../middlewares/urls.middleware.js';
import {postShortenUrl,getUrlById} from '../controllers/urls.controller.js';
const router = Router();

router.post("/urls/shorten",validationPostShortenUrl,postShortenUrl)
router.get("/urls/:id",getUrlById)

export default router;