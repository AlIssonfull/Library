import express  from "express";
import * as bookController from '../controllers/book';

const books = express.Router();

books.post("/book", bookController.createBook);
books.delete("/book/:id", bookController.deleteBook);
books.put("/book/:id", bookController.updateBook);

export default books;