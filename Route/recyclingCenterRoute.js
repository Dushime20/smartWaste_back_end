import express from 'express'
import {createRecyclingCenterValidation} from '../Utils/validation.js'
import {addRecyclingCenter,getAllRecyclingCenter} from '../controller/recyclingCenterController.js'
import { authenticateToken } from '../Middleware/authethicateToken.js'

const route = express.Router()

route.post("/add_recycling_center",authenticateToken,createRecyclingCenterValidation,addRecyclingCenter)
route.get("/allRecyclingCenter",authenticateToken,getAllRecyclingCenter)
export default route