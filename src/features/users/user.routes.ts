import { Router } from "express";
import { getUsers, getUserById, setUser, updateUser, deleteUser } from "./user.controller";

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById)

router.post('/', setUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser)

export default router;