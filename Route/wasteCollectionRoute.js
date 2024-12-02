import express from 'express'
import{createRouteValidation} from "../Utils/validation.js"
import{createRoute,getAllRoute,getRouteDetails,findRouteByName} from "../controller/routeController.js"

import{authenticateToken} from "../Middleware/authethicateToken.js";

const route = express.Router();
route.post("/addRoute",createRouteValidation,createRoute);
route.get("/allRoute",authenticateToken,getAllRoute)
route.get("/getRouteById/:id",authenticateToken,getRouteDetails)
route.get("/getRouteByName/:route_name",authenticateToken,findRouteByName)




export default route;