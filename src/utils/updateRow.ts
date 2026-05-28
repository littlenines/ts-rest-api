import db from "@/db";
import { NotFoundError } from "@utils/notFoundError";

export const updateRow = <T>(table: string, id: number, updates: Partial<T>, returning = true): T | void => {
    const keys = Object.keys(updates as object);
    const values = Object.values(updates as object);

    const setClause = keys.map(key => `${key} = ?`).join(', ');
    const result = db.prepare(`UPDATE ${table} SET ${setClause} WHERE id = ?`).run(...values, id);

    if (result.changes === 0) throw new NotFoundError(table);

    if (returning) return db.prepare(`SELECT * FROM ${table} WHERE id = ?`).get(id) as T;
};
