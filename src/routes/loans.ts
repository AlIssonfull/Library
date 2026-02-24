import express from "express";
import * as LoanController from "../controllers/loans";

const loans = express.Router();

loans.post("/loan", LoanController.createLoan);
loans.delete("/loan/:id", LoanController.deleteLoan);
loans.put("/loan/:id", LoanController.updateLoan);

export default loans;