import express from 'express';
const router = express.Router();
import { getPosts, createPost, getPost, deletePost, updatePost } from '../controllers/posts.js';
import Post from '../models/Post.js';

// get all posts
router.get('/', getPosts);

// create a post
router.post('/', createPost);

// get a specific post
router.get('/:postId', getPost);

// delete a post
router.delete('/postId', deletePost);

// update a post
router.patch('/:postId', updatePost);

export default router;
