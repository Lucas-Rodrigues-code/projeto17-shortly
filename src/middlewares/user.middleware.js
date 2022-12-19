import { userSchema, userSchemaLogin } from "../models/user.schema.js";
import connection from '../database/db.js'

export default async function userValidation(req, res, next) {
    const user = req.body;
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    try {
        const userExist = await connection.query("SELECT * FROM users WHERE email=$1;", [user.email]);
        if (userExist.rowCount > 0) {
            res.status(409).send({ message: "Email já está em uso." });
            return;
        }

    } catch (err) {
        res.sendStatus(500)
    }
    res.locals.user = user;
    next();
}