import { Router } from "express";

import { getPosts, getOnePost, getUserPosts, createPost, updatePost, deletePost } from "./post.controller";

const router = Router();

router.get('/', getPosts)
router.get('/:id', getOnePost)
router.get('/:id/user', getUserPosts)

router.post('/', createPost)

router.patch('/:id', updatePost)

router.delete('/:id', deletePost)


export default router;