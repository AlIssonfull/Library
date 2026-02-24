import { db } from '../db/connection';

export async function CreateStudent(data: { name: string; email: string }) {
    return db.execute("INSERT INTO student (name, email) VALUES (?, ?)", [data.name, data.email]);
}

export async function DeleteStudent(id: number) {
    return db.execute("DELETE FROM student WHERE id = ?", [id]);
}

export async function UpdateStudent(id: number, data: { name: string; email: string }) {
    return db.execute("UPDATE student SET name = ?, email = ? WHERE id = ?", [data.name, data.email, id]);
}