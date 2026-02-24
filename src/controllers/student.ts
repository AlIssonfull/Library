import { studentSchema,idSchema } from "../schemas/zod";
import { CreateStudent, DeleteStudent, UpdateStudent } from "../services/studentdb";
import { Request, Response } from "express";

export async function createStudent(req: Request, res: Response) {
    const validation = studentSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ errors: validation.error.format() });
    }

    const result = await CreateStudent(validation.data);
    res.json({ message: "Student created successfully!", result });
}

export async function deleteStudent(req: Request, res: Response) {
    const validation = idSchema.safeParse(req.params);
    if (!validation.success) {
        return res.status(400).json({ errors: validation.error.format() });
    }

    const result = await DeleteStudent(validation.data.id);
    res.json({ message: "Student deleted successfully!", result });
}

export async function updateStudent(req: Request, res: Response) {
    const idValidation = idSchema.safeParse(req.params);
    if (!idValidation.success) {
        return res.status(400).json({ errors: idValidation.error.format() });
    }

    const updateValidation = studentSchema.safeParse(req.body);
    if (!updateValidation.success) {
        return res.status(400).json({ errors: updateValidation.error.format() });
    }

    const result = await UpdateStudent(idValidation.data.id, updateValidation.data);
    res.json({ message: "Student updated successfully!", result });
}