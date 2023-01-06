import bcrypt from "bcrypt";
import {pool} from "../utils/database.js"
import util from "node:util"
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    //check existing user
    const {email, username, password} = req.body
    try {
        const [result] = await pool.execute('SELECT * FROM `users` WHERE email = :email OR username = :username', {
            email,
            username
        });
        if (result.length) return res.status(409).json("User already exist!");

        //hash to password and create user
        const hashPassword = await bcrypt.hash(password, 10);
        await pool.execute('INSERT INTO `users`(`username`,`email`,`password`) VALUES (:username, :email, :password)', {
            username,
            email,
            password: hashPassword
        })
        res.status(200).json("User has been created.")
    } catch (err) {
        console.log(err)
    }
}

export const login = async (req, res) => {
    //CHECK USER

    try{
        const [result] =  await pool.execute('SELECT * FROM `users` WHERE username = :username', {
            username: req.body.username
        });

        if (result.length === 0) return res.status(404).json("User not found!");

        //CHECK PASSWORD
        const isPasswordCorrect = await bcrypt.compare(req.body.password, result[0].password);

        if (!isPasswordCorrect) return res.status(400).json("Wrong username or password");

        const {password, ...other} = result[0];

        const sign = util.promisify(jwt.sign);

        const token = await sign({id:result[0].id},
            "secretKey" ,
            {expiresIn: '1h'}
        );

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)

    } catch (err) {
        console.log(err)
    }


}

export const logout = async (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out.")
}