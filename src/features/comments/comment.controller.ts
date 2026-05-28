import { controllerHandler } from "@utils/controllerHandler";
import { sendSuccess, sendDeleted } from "@utils/response";
import { STATUS } from "@constants/httpStatus";
import * as CommentService from './comments.service';

export const getPostComments = controllerHandler((req, res) => {
    sendSuccess(res, CommentService.getAllPostComments(+req.params.id));
}, "Couldn't get comments for post");

export const setComment = controllerHandler((req, res) => {
    sendSuccess(res, CommentService.setCommentForPost(+req.params.id, req.body), STATUS.CREATED);
}, "Couldn't set comment");

export const updateComment = controllerHandler((req, res) => {
    sendSuccess(res, CommentService.updateOneComment(+req.params.id, req.body));
}, "Couldn't update comment");

export const deleteComment = controllerHandler((req, res) => {
    CommentService.deleteOneComment(+req.params.id);
    sendDeleted(res);
}, "Couldn't delete comment");
