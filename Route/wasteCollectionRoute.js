import express from 'express'
import{createRouteValidation,validateUpdate} from "../Utils/validation.js"
import{createRoute,getAllRoute,getRouteDetails,findRouteByName,deleteRoute,updateRoute} from "../controller/routeController.js"

import{authenticateToken} from "../Middleware/authethicateToken.js";

const route = express.Router();
route.post("/addRoute",createRouteValidation,createRoute,authenticateToken);
route.get("/allRoute",authenticateToken,getAllRoute)
route.get("/getRouteById/:id",authenticateToken,getRouteDetails)
route.get("/getRouteByName/:route_name",authenticateToken,findRouteByName)
route.patch("/updateRoute/:id",authenticateToken,validateUpdate,updateRoute)
route.delete("/deleteRoute/:id",authenticateToken,deleteRoute)




export default route;