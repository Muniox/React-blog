import bcrypt from "bcrypt";
import {pool} from "../utils/database.js"

export const register = async (req, res) => {
    //check existing user
    const {email, name, password} = req.body
    try {
        const [result] = await pool.execute('SELECT * FROM `users` WHERE email = :email OR username = :name', {
            email,
            name
        });
        if (result.length) return res.status(409).json("User already exist!");

        //hash to password and create user
        const hashPassword = await bcrypt.hash(password, 10);
        await pool.execute('INSERT INTO `users`(`username`,`email`,`password`) VALUES (:name, :email, :password)', {
            name,
            email,
            password: hashPassword
        })
        res.status(200).json("User has been created.")
    } catch (err) {
        res.json(err)
    }
}

export const login = async (req, res) => {

}

export const logout = async (req, res) => {

}