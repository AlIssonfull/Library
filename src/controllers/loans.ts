import { loanSchema, loanIdSchema } from "../schemas/zod";
import { CreateLoan, DeleteLoan, UpdateLoan } from "../services/loansdb"; 
import { Request, Response } from "express";

export async function createLoan(req: Request, res: Response) {
    const validation = loanSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ errors: validation.error.format() });
    }

    const result = await CreateLoan(validation.data);
    res.json({ message: "Loan created successfully!", result });
}

export async function deleteLoan(req: Request, res: Response) {
    const validation = loanIdSchema.safeParse(req.params);
    if (!validation.success) {
        return res.status(400).json({ errors: validation.error.format() });
    }

    const result = await DeleteLoan(validation.data.id);
    res.json({ message: "Loan deleted successfully!", result });
}

export async function updateLoan(req: Request, res: Response) {
    const idValidation = loanIdSchema.safeParse(req.params);
    if (!idValidation.success) {
        return res.status(400).json({ errors: idValidation.error.format() });
    }

    const updateValidation = loanSchema.safeParse(req.body);
    if (!updateValidation.success) {
        return res.status(400).json({ errors: updateValidation.error.format() });
    }

    const result = await UpdateLoan(idValidation.data.id, updateValidation.data);
    res.json({ message: "Loan updated successfully!", result });
}