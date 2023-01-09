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
    const postId = req.params.id
    
    try {
        const [result] = await pool.execute('SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = :postId', {
            postId
        });
        return res.status(200).json(result[0]);
    } catch (err) {
        return res.json(err)
    }

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