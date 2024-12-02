import caseModel from "../Model/caseModel";
import asyncWrapper from "../Middleware/async";
import {BadRequestError} from "../Error/index.js";
import { validationResult } from "express-validator";

//creating new case
export const AddCase = asyncWrapper(async(req,res,next) =>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    };

    const { title, description } = req.body;
    const userId = req.userId; // Get the user ID from the request object
  
    const newCase = await caseModel.create({ title, description, user: userId });
    return res.status(201).json({ message: "New case created successfully", newCase });





})