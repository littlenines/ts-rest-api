# crud-node

A REST API built with Node.js, Express, TypeScript, and SQLite.

## Stack

- **Express** — HTTP server
- **TypeScript** — type safety
- **better-sqlite3** — SQLite database
- **ts-node** — run TypeScript directly

## Project Structure

```
src/
├── constants/        # HTTP status codes
├── features/
│   ├── users/        # User routes, controller, service, entity, dto
│   ├── posts/        # Post routes, controller, service, entity, dto
│   └── comments/     # Comment routes, controller, service, entity, dto
├── routes/           # Root router
├── utils/            # Shared helpers (tryCatch, updateRow, response, etc.)
├── db.ts             # SQLite connection and table setup
└── seed.ts           # Seed script
```

## Getting Started

```bash
npm install
npm run seed    # seed the database with sample data
npm run dev     # start the dev server on port 3000
```

## API Endpoints

### Users
| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/v1/users | Get all users |
| GET | /api/v1/users/:id | Get user by id |
| POST | /api/v1/users | Create user |
| PATCH | /api/v1/users/:id | Update user |
| DELETE | /api/v1/users/:id | Delete user |

### Posts
| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/v1/posts | Get all posts |
| GET | /api/v1/posts/:id | Get post by id |
| GET | /api/v1/posts/users/:id | Get posts by user |
| POST | /api/v1/posts | Create post |
| PATCH | /api/v1/posts/:id | Update post |
| DELETE | /api/v1/posts/:id | Delete post |

### Comments
| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/v1/comments/:id/post | Get comments for a post |
| POST | /api/v1/comments/:id/post | Add comment to a post |
| PATCH | /api/v1/comments/:id | Update comment |
| DELETE | /api/v1/comments/:id | Delete comment |
