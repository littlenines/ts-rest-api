import * as UserService from './user.service';
import { controllerHandler } from "@utils/controllerHandler";
import { sendSuccess, sendDeleted } from "@utils/response";
import { STATUS } from "@constants/httpStatus";

export const getUsers = controllerHandler((_req, res) => {
    sendSuccess(res, UserService.getAllUsers());
}, "Couldn't get users");

export const getUserById = controllerHandler((req, res) => {
    sendSuccess(res, UserService.getOneUserById(+req.params.id));
}, "Couldn't get user by id");

export const setUser = controllerHandler((req, res) => {
    sendSuccess(res, UserService.setNewUser(req.body), STATUS.CREATED);
}, "Couldn't set user");

export const updateUser = controllerHandler((req, res) => {
    sendSuccess(res, UserService.updateUserById(+req.params.id, req.body));
}, "Couldn't update user");

export const deleteUser = controllerHandler((req, res) => {
    UserService.deleteUserById(+req.params.id);
    sendDeleted(res);
}, "Couldn't delete user");
