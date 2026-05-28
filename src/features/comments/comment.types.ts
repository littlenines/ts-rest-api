export type Comment = {
    id: number;
    comment: string;
    userId: number;
    postId: number;
}
export type CommentWithAuthor = {
    id: number;
    comment: string;
    name: string;
};