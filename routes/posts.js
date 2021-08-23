import express from 'express';
const router = express.Router();
// import { getPosts, createPost } from '../controllers/posts.js';
import Post from '../models/Post.js';


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error });
    }
});

export default router;
