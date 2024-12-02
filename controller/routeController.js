import routeModel from "../Model/routeModel.js"
import asyncWrapper from "../Middleware/async.js";
import {UnauthorizedError,BadRequestError, NotFoundError} from "../Error/index.js";
import { validationResult } from "express-validator";

export const createRoute = asyncWrapper(async(req,res,next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    };

    const { route_name, area_covered, collection_days, vehicle_id, status } = req.body;

  // Check if route already exists
  const existingRoute = await routeModel.findOne({ route_name });
  if (existingRoute) {
    return next(new BadRequestError('Route with this name already exists'));
  }

  // Create new waste collection route
  const newRoute = new routeModel({
    route_name,
    area_covered,
    collection_days,
    vehicle_id,
    status
  });

  const savedRoute = await newRoute.save();
  
  if(savedRoute){
    const{_id,__v,...response} = savedRoute
    res.status(201).json({
        message: 'Waste collection route created successfully!',
        route: response
      });
  }

});

export const getAllRoute = asyncWrapper(async(req,res,next)=>{
    const routes= await routeModel.find();
    if (!routes || routes.length === 0) {
        // If no routes are found, return a message
        return next(new NotFoundError("No waste collection routes found."));
      }
  
      // If routes are found, return them
      return res.status(200).json({
        success: "All route found successfully",
        size:routes.length,
        data: routes,
      });
})