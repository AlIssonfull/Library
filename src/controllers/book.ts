import { bookSchema, bookIdSchema } from "../schemas/zod";
import { CreateBook, DeleteBook, UpdateBook } from "../services/bookdb";
import { Request, Response } from "express";

export async function createBook(req: Request, res: Response) {
    const validation = bookSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ errors: validation.error.format() });
    }
    
    const result = await CreateBook(validation.data);
    res.json({ message: "Book created successfully!", result });
}

export async function deleteBook(req: Request, res: Response) {
    const validation = bookIdSchema.safeParse(req.params);
    if (!validation.success) {
        return res.status(400).json({ errors: validation.error.format() });
    }

    const result = await DeleteBook(validation.data.id);
    res.json({ message: "Book deleted successfully!", result });
}

export async function updateBook(req: Request, res: Response) {
    const idValidation = bookIdSchema.safeParse(req.params);
    if (!idValidation.success) {
        return res.status(400).json({ errors: idValidation.error.format() });
    }

    const updateValidation = bookSchema.safeParse(req.body);
    if (!updateValidation.success) {
        return res.status(400).json({ errors: updateValidation.error.format() });
    }

    const result = await UpdateBook(idValidation.data.id, updateValidation.data);
    res.json({ message: "Book updated successfully!", result });
}