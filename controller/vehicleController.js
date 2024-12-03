
import vehicleModel from "../Model/VehicleModel.js"
import {UnauthorizedError,BadRequestError, NotFoundError} from "../Error/index.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../Middleware/async.js";

export const addVehicle = asyncWrapper(async(req,res,next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    };

    const{license_plate,driver_name,gps_coordinates,status,fuel_usage,route_id}=req.body

    const isVehicleExist = await vehicleModel.findOne({license_plate})
    if(isVehicleExist){
        return next(new BadRequestError(" vehicle already exist"))
    }
    const newVehicle = new vehicleModel({
        license_plate,driver_name,gps_coordinates,status,fuel_usage,route_id
    });

    const savedVehicle = await newVehicle.save();
    if(savedVehicle){
        return res.status(201).json({
            success:true,
            message:"vehicle added successfully",
            data:savedVehicle
        })
    }
});

export const getAllVehicles = asyncWrapper(async(req,res,next)=>{
    const result = await vehicleModel.find();
    if(!result){
        return next(new NotFoundError("No vehicle found!"))
    }
     return res.status(200).json({
        message:"vehicle fetched successfully",
        size: result.length,
        data: result
     })
}
);

export const getVehicleDetails = asyncWrapper(async(req,res,next)=>{
    const result = await vehicleModel.findById(req.params.id);
    if(!result){
        return next(new NotFoundError("vehicle not found!"))
    }
    return res.status(200).json({
        message: "vehicle fecthed successfully",
        data: result
    })

});
export const updateVehicle = asyncWrapper(async(req,res,next)=>{
   const idParams = req.params.id
   const result = await vehicleModel.findByIdAndUpdate(idParams,req.body,{next:true});
   if(!result){
    return next(new NotFoundError("vehicle not found!"))
   }
   return res.status(200).json({
    message: "vehicle updated successfully",
   })
});

export const deleteVehicle = asyncWrapper(async(req,res,next)=>{
    const idParams = req.params.id
    const result = await vehicleModel.findByIdAndDelete(idParams);
    if(!result){
        return next(new NotFoundError("vehicle not found!"))
    }
    return res.status(200).json({
        success: true,
        message: "vehicle deleted successfully"
    })
})