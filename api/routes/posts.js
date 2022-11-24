import {Router} from "express";
import {addPost} from "../controllers/users.controller.js";

export const postRouter = Router();

postRouter
    .get('/', addPost)