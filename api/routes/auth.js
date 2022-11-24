import {Router} from "express";
import {login, register, logout} from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter
    .post('/register', register)
    .post('/login', login)
    .post('/logout', logout);