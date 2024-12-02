import userRoute from "./userRoute.js";
import wasteCollectionRoute from "./wasteCollectionRoute.js";
import express from "express";
//import ContactRoute from "./contactRoute1.js"
const route = express.Router();

route.use("/user", userRoute);
// route.use("/payment", userRoute);
 route.use("/route", wasteCollectionRoute);
//route.use("/contact", ContactRoute);
export default route;