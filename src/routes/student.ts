import express from 'express';
import * as studentController from '../controllers/student';

const students = express.Router();

students.post("/student", studentController.createStudent);
students.delete("/student/:id", studentController.deleteStudent);
students.put("/student/:id", studentController.updateStudent);

export default students;