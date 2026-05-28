import { Router } from "express";

import userRouter from '@features/users/user.routes';
import postRouter from '@features/posts/post.routes';
import commentRouter from '@features/comments/comment.routes';

const router = Router();

router.use('/users', userRouter);

router.use('/posts', postRouter);

router.use('/comments', commentRouter);

export default router;