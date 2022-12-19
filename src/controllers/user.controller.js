import connection from '../database/db.js';
import bcrypt from "bcrypt";

export default async function signUp(req, res) {
    const { name, email, password } = res.locals.user;

    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        await connection.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3);", [name, email, passwordHash]);
        res.sendStatus(201);

    } catch (err) {
        res.sendStatus(500);
    }
}