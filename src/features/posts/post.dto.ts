import { Post } from "./post.types";

export type CreatePostDto = Omit<Post, 'id'>;

export type UpdatePostDto = Partial<Omit<Post, 'id'>>;