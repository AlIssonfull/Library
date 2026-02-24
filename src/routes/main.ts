import express from 'express';
import { db } from '../db/connection';

const router = express.Router();

router.get("/students", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM student");
  res.json(rows);
});

router.get("/books", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM book");
  res.json(rows);
});

router.get("/loans", async (req, res) => {
  const [rows] = await db.execute(
    `SELECT * FROM loan
      JOIN student ON loan.student_id = student.id
      JOIN book ON loan.book_id = book.id`);
  res.json(rows);
});

export default router;
