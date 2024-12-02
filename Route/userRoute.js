
import {SignIn,SignUp,ResetPassword,ForgotPassword,Logout,test, getAllusers,getUserProfile,updateUserProfile,deleteUser} from '../controller/userController.js';
import express from 'express';
import { signUpValidator,signInValidator,resetPasswordValidation,forgotpasswordValidation, } from '../Utils/validation.js';
import{authenticateToken} from "../Middleware/authethicateToken.js";
const route= express.Router();
route.get("/Test",test)
route.post('/signup',signUpValidator,SignUp)
route.post('/signin',signInValidator,SignIn)
route.get('/listAll',authenticateToken,getAllusers)
route.get('/findUserProfile/:id',authenticateToken,getUserProfile)
route.patch('/updateUserProfile/:id',authenticateToken,updateUserProfile)
route.delete('/deleteUser/:id',authenticateToken,deleteUser)
route.post('/resetpassword',resetPasswordValidation,ResetPassword)
route.post('/forgotpassword',forgotpasswordValidation,ForgotPassword)
// route.post('/verify',otpValidation,Validateopt)

export default route;
