import * as PostService from './post.service';
import { controllerHandler } from "@utils/controllerHandler";
import { sendSuccess, sendDeleted } from "@utils/response";
import { STATUS } from "@constants/httpStatus";

export const getPosts = controllerHandler((_req, res) => {
    sendSuccess(res, PostService.getAllPosts());
}, "Couldn't get posts");

export const getOnePost = controllerHandler((req, res) => {
    sendSuccess(res, PostService.getPostById(+req.params.id));
}, "Couldn't get post by id");

export const getUserPosts = controllerHandler((req, res) => {
    sendSuccess(res, PostService.getAllUserPosts(+req.params.id));
}, "Couldn't get user posts");

export const createPost = controllerHandler((req, res) => {
    sendSuccess(res, PostService.createNewPost(req.body), STATUS.CREATED);
}, "Couldn't create a post");

export const updatePost = controllerHandler((req, res) => {
    sendSuccess(res, PostService.updatePostById(+req.params.id, req.body));
}, "Couldn't update a post");

export const deletePost = controllerHandler((req, res) => {
    PostService.deletePostById(+req.params.id);
    sendDeleted(res);
}, "Couldn't delete a post");
