import { User } from "./user.types";

export type CreateUserDto = Omit<User, 'id'>;

export type UpdateUserDto = Partial<Omit<User, 'id'>>;
