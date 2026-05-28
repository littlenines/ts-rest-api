import { Router } from "express";
import { getPostComments, setComment, updateComment, deleteComment } from "./comment.controller";

const router = Router();

router.get('/:id/post', getPostComments);

router.post('/:id/post', setComment);

router.patch('/:id', updateComment);

router.delete('/:id', deleteComment);

export default router;