import userRoute from "./userRoute.js";
import wasteCollectionRoute from "./wasteCollectionRoute.js";
import vehiclesRoute from './vehicleRoute.js'
import express from "express";
import recyclingCenterRoute from "./recyclingCenterRoute.js"
const route = express.Router();

route.use("/user", userRoute);
route.use("/recyclingCenter", recyclingCenterRoute);
route.use("/route", wasteCollectionRoute);
route.use("/vehicles", vehiclesRoute);
export default route;