import express from 'express'
import {createRecyclingCenterValidation} from '../Utils/validation.js'
import {addRecyclingCenter} from '../controller/recyclingCenterController.js'

const route = express.Router()

route.post("/add_recycling_center",createRecyclingCenterValidation,addRecyclingCenter)
export default route