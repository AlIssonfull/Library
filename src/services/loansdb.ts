import { db } from "../db/connection";

export async function CreateLoan(data: { student_id: number; book_id: number; loan_date: string; return_date: string }) {
    return db.execute(
        "INSERT INTO loan (student_id, book_id, loan_date, return_date) VALUES (?, ?, ?, ?)", [data.student_id, data.book_id, data.loan_date, data.return_date]);
}

export async function DeleteLoan(id: number) {
    return db.execute("DELETE FROM loan WHERE id = ?", [id]);
}

export async function UpdateLoan(id: number, data: { student_id: number; book_id: number; loan_date: string; return_date: string }) {
    return db.execute("UPDATE loan SET student_id = ?, book_id = ?, loan_date = ?, return_date = ? WHERE id = ?", [data.student_id, data.book_id, data.loan_date, data.return_date, id]);
}