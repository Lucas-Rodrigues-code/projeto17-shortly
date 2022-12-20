import { nanoid } from "nanoid";
import connection from '../database/db.js';
export async function postShortenUrl(req, res) {
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

export async function getUrlById(req, res) {
  const { id } = req.params;
  try {
    const url = (await connection.query("SELECT * FROM urls WHERE id=$1;", [id])).rows[0]

    if (!url) {
      res.status(404).send({ message: "Esse Id de url não existe." });
      return;
    }
    res.status(200).send({
      id: url.id,
      shortUrl: url.shortUrl,
      url: url.url,
    });
    return;
  } catch (err) {
    res.sendStatus(500);
  }
}