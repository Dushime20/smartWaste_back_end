import express from 'express'
import{createRouteValidation} from "../Utils/validation.js"
import{createRoute,getAllRoute} from "../controller/routeController.js"

import{authenticateToken} from "../Middleware/authethicateToken.js";

const route = express.Router();
route.post("/addRoute",createRouteValidation,createRoute);
route.get("/allRoute",authenticateToken,getAllRoute)




export default route;