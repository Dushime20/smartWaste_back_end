import express from 'express'
import {createRecyclingCenterValidation,validateUpdate} from '../Utils/validation.js'
import {addRecyclingCenter,getAllRecyclingCenter,getRecyclingCenterDetails,updateRecyclingCenter,deleteRecyclingCenter} from '../controller/recyclingCenterController.js'
import { authenticateToken } from '../Middleware/authethicateToken.js'

const route = express.Router()

route.post("/add_recycling_center",authenticateToken,createRecyclingCenterValidation,addRecyclingCenter)
route.get("/allRecyclingCenter",authenticateToken,getAllRecyclingCenter)
route.get("/getRecyclingCenterById/:id",authenticateToken,getRecyclingCenterDetails)
route.patch("/updateRecyclingCenterById/:id",authenticateToken,validateUpdate,updateRecyclingCenter)
route.delete("/deleteRecyclingCenter/:id",authenticateToken,deleteRecyclingCenter)
export default route