import { z } from 'zod';

export const studentSchema = z.object({
    name: z.string().min(2, "Nome precisa ter pelo menos 2 caracteres"),
    email: z.string().email("Formato de email inválido")
});

export const idSchema = z.object({
    id: z.number().int().positive("ID deve ser um número inteiro positivo")
});

export const  bookSchema = z.object({
    title: z.string().min(2, "Título deve ter pelo menos 2 caracteres"),
    author: z.string().min(2, "Autor deve ter pelo menos 2 caracteres")
});

export const bookIdSchema = z.object({
    id: z.number().int().positive("ID deve ser um número inteiro positivo")
});

export const loanIdSchema = z.object({
    id: z.number().int().positive("ID deve ser um número inteiro positivo")
});

export const loanSchema = z.object({
    student_id: z.number().int().positive("ID do estudante deve ser um número inteiro positivo"),
    book_id: z.number().int().positive("ID do livro deve ser um número inteiro positivo"),
    id: z.number().int().positive("ID deve ser um número inteiro positivo"),
    loan_date: z.string().refine(date => !isNaN(Date.parse(date)), "Data de empréstimo inválida"),
    return_date: z.string().refine(date => !isNaN(Date.parse(date)), "Data de retorno inválida")
});