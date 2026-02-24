import { db } from "../db/connection";

export async function CreateBook(data: { title: string; author: string }) {
    return db.execute("INSERT INTO book (title, author) VALUES (?, ?)", [data.title, data.author]);
}

export async function DeleteBook(id: number) {
    return db.execute("DELETE FROM book WHERE id = ?", [id]);
}

export async function UpdateBook(id: number, data: { title: string; author: string }) {
    return db.execute("UPDATE book SET title = ?, author = ? WHERE id = ?", [data.title, data.author, id]);
}