import { tryCatch } from "@utils/tryCatch"
import { Comment, CommentWithAuthor } from "./comment.types"
import db from "@/db"
import { updateRow } from "@utils/updateRow"
import { UpdateCommentDTO, CreateCommentDTO } from "./comment.dto"
import { NotFoundError } from "@utils/notFoundError"

export const getAllPostComments = (id: number) => {
    return tryCatch(() => {
        const post = db.prepare('SELECT id FROM posts WHERE id = ?').get(id);
        if (!post) throw new NotFoundError('Post');

        return db.prepare(
            'SELECT comments.id, comments.comment, users.name FROM comments JOIN users ON comments.userId = users.id WHERE comments.postId = ?'
        ).all(id) as CommentWithAuthor[];
    })
}

export const setCommentForPost = (id: number, body: CreateCommentDTO) => {
    return tryCatch(() => {
        const newComment = db.prepare('INSERT INTO comments (comment, userId, postId) values (?, ?, ?)').run(body.comment, body.userId, id);
        return db.prepare(
            'SELECT comments.id, comments.comment, users.name FROM comments JOIN users ON comments.userId = users.id WHERE comments.id = ?'
        ).get(newComment.lastInsertRowid) as CommentWithAuthor;
    })
}

export const updateOneComment = (id: number, body: UpdateCommentDTO) => {
    return tryCatch(() => {
        updateRow<Comment>('comments', id, body, false);
        
        return db.prepare(
            'SELECT comments.id, comments.comment, users.name FROM comments JOIN users ON comments.userId = users.id WHERE comments.id = ?'
        ).get(id) as CommentWithAuthor;
    })
}

export const deleteOneComment = (id: number | undefined) => {
    return tryCatch(() => {
        const result = db.prepare('DELETE FROM comments WHERE id = ?').run(id)

        if (result.changes === 0) throw new NotFoundError('Comment');
    })
}