import { nanoid } from "nanoid";
import connection from '../database/db.js';
export default async function postShortenUrl(req, res) {
  const user = res.locals.user;
  const { url } = req.body;
  const shortUrl = nanoid();

  try {
    await connection.query(`INSERT INTO urls (url, "shortUrl", user_id) VALUES ($1, $2, $3);`,
      [url, shortUrl, user.id]);
    res.status(201).send({ message: "Url shortend.", shortUrl: shortUrl });
    return;
  } catch (err) {
    res.sendStatus(500);
  }
}