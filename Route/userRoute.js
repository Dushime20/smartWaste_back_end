
import {SignIn,SignUp,ResetPassword,ForgotPassword,Logout,test, getAllusers} from '../controller/userController.js';
import express from 'express';
import { signUpValidator,signInValidator,resetPasswordValidation,forgotpasswordValidation, } from '../Utils/validation.js';
const route= express.Router();
route.get("/Test",test)
route.post('/signup',signUpValidator,SignUp)
route.post('/signin',signInValidator,SignIn)
route.get('/listAll',getAllusers)
route.post('/resetpassword',resetPasswordValidation,ResetPassword)
route.post('/forgotpassword',forgotpasswordValidation,ForgotPassword)
// route.post('/verify',otpValidation,Validateopt)

export default route;
