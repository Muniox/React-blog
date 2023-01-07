import {pool} from "../utils/database.js"

export const getPosts = async (req, res) => {
    const query = req.query.cat ? 'SELECT * FROM `posts` WHERE `cat`= :cat' : 'SELECT * FROM `posts`';

    try {
        const [result] = await pool.execute(query,{
            cat: req.query.cat
        })
        return res.status(200).json(result)
    } catch (error) {
        return res.json(error)
    }
}

export const getPost = async (req, res) => {
    res.json("from controller");
}

export const addPost = async (req, res) => {
    res.json("from controller");
}

export const deletePost = async (req, res) => {
    res.json("from controller");
}

export const updatePost = async (req, res) => {
    res.json("from controller");
}