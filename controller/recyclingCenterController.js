import recyclingCenterModel from "../Model/recyclingCenterModel.js"
import asyncWrapper from "../Middleware/async.js";
import {UnauthorizedError,BadRequestError, NotFoundError} from "../Error/index.js";
import { validationResult } from "express-validator";

export const addRecyclingCenter = asyncWrapper(async(req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty){
        return next(new BadRequestError(errors.array()[0].msg))
    }
    const {center_name,address,materials_accepted,operating_hours} = req.body
    const isRecyclingCenter = await recyclingCenterModel.findOne({center_name})
    if(isRecyclingCenter){
        return next(new BadRequestError(" Recycling Center already exist"))
    }

    const newRecyclingCenter = new recyclingCenterModel({
        center_name,address,materials_accepted,operating_hours
    
    
});
    const savedRecyclingCenter = await newRecyclingCenter.save()
    if(savedRecyclingCenter){
        return res.status(200).json({
            success: true,
            message:"Recycling Center is added successfully",
            data: savedRecyclingCenter

        })
    }
})