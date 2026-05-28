import db from "@/db"
import { User } from "./user.types";
import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { tryCatch } from "@utils/tryCatch";
import { updateRow } from "@utils/updateRow";
import { NotFoundError } from "@utils/notFoundError";

export const getAllUsers = () => {
    return tryCatch(() => db.prepare('SELECT * FROM users').all() as User[])
}

export const getOneUserById = (id: number | undefined) => {
    return tryCatch(() => db.prepare('SELECT * FROM users WHERE id = ?').get(id) as User | undefined)
}

export const setNewUser = (user: CreateUserDto) => {
    return tryCatch(() => {
        const newUser = db.prepare('INSERT INTO users (name, lastName) values (?, ?)').run(user.name, user.lastName)
        return { id: newUser.lastInsertRowid, ...user }
    })
}

export const updateUserById = (id: number, updates: UpdateUserDto) => tryCatch(() => updateRow<User>('users', id, updates));

export const deleteUserById = (id: number | undefined) => {
    return tryCatch(() => {

        const result = db.prepare("DELETE FROM users WHERE id = ?").run(id);

        if (result.changes === 0) throw new NotFoundError('User');
    })
}
