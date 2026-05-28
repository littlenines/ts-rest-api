import db from "@/db"
import { tryCatch } from "@utils/tryCatch"
import { Post } from "./post.types"
import { CreatePostDto, UpdatePostDto } from "./post.dto"
import { updateRow } from "@utils/updateRow"
import { NotFoundError } from "@utils/notFoundError"

export const getAllPosts = () => tryCatch(() => db.prepare("SELECT * FROM posts").all() as Post[])

export const getPostById = (id: number | undefined) => tryCatch(() => db.prepare("SELECT * FROM posts WHERE id = ?").get(id) as Post | undefined)

export const getAllUserPosts = (id: number | undefined) => tryCatch(() => db.prepare("SELECT posts.* FROM posts WHERE userId = ?").all(id) as Post[])

export const createNewPost = (post: CreatePostDto) => {
    return tryCatch(() => {
        const newPost = db.prepare("INSERT INTO posts (title, body, userId) values (?, ?, ?)").run(post.title, post.body, post.userId)
        return { id: newPost.lastInsertRowid, ...post }
    })
}

export const updatePostById = (id: number, updates: UpdatePostDto) => tryCatch(() => updateRow<Post>('posts', id, updates));

export const deletePostById = (id: number | undefined) => {
    return tryCatch(() => {
        const result = db.prepare("DELETE FROM posts WHERE id = ?").run(id);

        if (result.changes === 0) throw new NotFoundError('Post');
    })
}