import { Comment } from "./comment.types";

export type CreateCommentDTO = Omit<Comment, 'id'>;

export type UpdateCommentDTO = Partial<Omit<Comment, 'id'>>;