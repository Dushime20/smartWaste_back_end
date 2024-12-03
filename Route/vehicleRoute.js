import express from 'express'
import{createVehiclevalidation} from '../Utils/validation.js'
import{authenticateToken} from "../Middleware/authethicateToken.js";
import{addVehicle,deleteVehicle,updateVehicle,getAllVehicles,getVehicleDetails}from '../controller/vehicleController.js'

const route = express.Router();

route.post('/addVehicle',createVehiclevalidation,addVehicle)
route.get('/allVehicle',getAllVehicles)
route.get('/getVehicleById/:id',getVehicleDetails)
route.patch('/updateVehicle/:id',updateVehicle)
route.delete('/deleteVehicle/:id',deleteVehicle)

export default route;