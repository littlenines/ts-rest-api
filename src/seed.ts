import db from './db';

db.prepare('DELETE FROM comments').run();
db.prepare('DELETE FROM posts').run();
db.prepare('DELETE FROM users').run();

const insertUser = db.prepare('INSERT INTO users (name, lastName) VALUES (?, ?)');
const insertPost = db.prepare('INSERT INTO posts (title, body, userId) VALUES (?, ?, ?)');
const insertComment = db.prepare('INSERT INTO comments (comment, userId, postId) VALUES (?, ?, ?)');

const users = [
    { name: 'Mjau', lastName: 'Mrk' },
    { name: 'Woof', lastName: 'Smrk' },
    { name: 'John', lastName: 'Doe' },
    { name: 'Jane', lastName: 'Doe' },
    { name: 'Alice', lastName: 'Smith' },
];

const userIds = users.map(user => insertUser.run(user.name, user.lastName).lastInsertRowid);

const posts = [
    { title: 'First post', body: 'Hello world', userId: userIds[0] },
    { title: 'Second post', body: 'Another day', userId: userIds[0] },
    { title: 'Woof post', body: 'Much wow', userId: userIds[1] },
    { title: 'Johns thoughts', body: 'Just a regular day', userId: userIds[2] },
    { title: 'Janes diary', body: 'Had a great time', userId: userIds[3] },
    { title: 'Alice in dev land', body: 'Learning to code', userId: userIds[4] },
    { title: 'Alice again', body: 'Getting better at this', userId: userIds[4] },
];

const postIds = posts.map(post => insertPost.run(post.title, post.body, post.userId).lastInsertRowid);

const comments = [
    { comment: 'Great post!', userId: userIds[1], postId: postIds[0] },
    { comment: 'I agree!', userId: userIds[2], postId: postIds[0] },
    { comment: 'Nice one', userId: userIds[0], postId: postIds[2] },
    { comment: 'Very relatable', userId: userIds[3], postId: postIds[3] },
    { comment: 'Keep it up!', userId: userIds[4], postId: postIds[5] },
    { comment: 'Thanks for sharing', userId: userIds[0], postId: postIds[5] },
];

for (const comment of comments) {
    insertComment.run(comment.comment, comment.userId, comment.postId);
}

console.log('Seeded users, posts and comments');
