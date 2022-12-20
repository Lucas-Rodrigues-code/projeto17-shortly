import connection from '../database/db.js';
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export  async function signUp(req, res) {
    const { name, email, password } = res.locals.user;

    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        await connection.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3);", [name, email, passwordHash]);
        res.sendStatus(201);

    } catch (err) {
        res.sendStatus(500);
    }
}

export async function signIn(req, res) {
    const user = res.locals.user;

    const token = uuid();
    
    try {
        await connection.query("UPDATE users SET token=$1 WHERE id=$2;", [token, user.id]);
        res.status(200).send({ message: "você se conectou.", token: token });
        return;
    } catch (err) {
        res.sendStatus(500);
    }
}