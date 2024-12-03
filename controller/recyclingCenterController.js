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
});

export const getAllRecyclingCenter =  asyncWrapper(async(req,res,next)=>{
    const result = await recyclingCenterModel.find();
    if(!result || result.length === 0){
        return next(new NotFoundError("Recycle center not found!"))
    }
    return res.status(200).json({
        message: "recycling center fetched successfully",
        size:result.length,
        data: result
    })
});

export const getRecyclingCenterDetails = asyncWrapper(async(req,res,next)=>{
    const idParams = req.params.id
    const result = await recyclingCenterModel.findById(idParams)
    if(!result){
        return next(new NotFoundError("Recycling Center not found!"))
    }
    return res.status(200).json({
        success:true,
        message: "Recycling Center fetched successfully",
        data: result
    })
});

export const updateRecyclingCenter =  asyncWrapper(async(req,res,next)=>{
    const paramId = req.params.id
    const  reqBody = req.body
    const result = await recyclingCenterModel.findByIdAndUpdate(paramId,reqBody,{next:true})
    if(!result){
        return next(new NotFoundError("Recycling Center not found!"));

    }
    return res.status(200).json({
        success:true,
        message:"Recycling Center updated successfully"
    })
});

export const deleteRecyclingCenter = asyncWrapper(async(req,res,next)=>{

})