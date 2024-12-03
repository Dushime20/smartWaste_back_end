import express from 'express'
import{createVehiclevalidation,validateUpdate} from '../Utils/validation.js'
import{authenticateToken} from "../Middleware/authethicateToken.js";
import{addVehicle,deleteVehicle,updateVehicle,getAllVehicles,getVehicleDetails}from '../controller/vehicleController.js'

const route = express.Router();

route.post('/addVehicle',authenticateToken,createVehiclevalidation,addVehicle)
route.get('/allVehicle',authenticateToken,getAllVehicles)
route.get('/getVehicleById/:id',authenticateToken,getVehicleDetails)
route.patch('/updateVehicle/:id',authenticateToken,validateUpdate,updateVehicle)
route.delete('/deleteVehicle/:id',authenticateToken,deleteVehicle)

export default route;