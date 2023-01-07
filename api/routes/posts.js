import {Router} from "express";
import {addPost, deletePost, getPost, getPosts, updatePost} from "../controllers/posts.controller.js";

export const postRouter = Router();

postRouter
    .get('/', getPosts)
    .get('/:id', getPost)
    .post('/', addPost)
    .delete('/:id', deletePost)
    .put('/:id', updatePost);
