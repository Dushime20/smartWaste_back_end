import {body} from 'express-validator';
import { check } from 'express-validator';
export const forgotpasswordValidation=[
    body("Email","Email is required").not().isEmpty(),
];

export const resetPasswordValidation=[

    body("Password","Password is required").not().isEmpty(),
    body("Password","Password  should contain atleast 8 characters,uppercase and lower case letters,numbers and symbols").isStrongPassword(),
    body("confirmPassword","confirmPassword is required ").not().isEmpty()
];
export const otpValidation=[

    body("otp","otp is required").not().isEmpty()
];



export const signUpValidator = [
  check('FullName')
    .notEmpty().withMessage('Full name is required.')
    .isLength({ min: 2 }).withMessage('Full name must be at least 2 characters long.'),
  check('email')
    .isEmail().withMessage('Please provide a valid email.')
    .notEmpty().withMessage('Email is required.'),
  check('address')
    .notEmpty().withMessage('Address is required.'),
  check('phone_number')
    .notEmpty().withMessage('Phone number is required.')
    .isMobilePhone().withMessage('Please provide a valid phone number.'),
  check('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
    .notEmpty().withMessage('Password is required.'),
  check('confirmPassword')
    .notEmpty().withMessage('Confirm password is required.')
    .custom((value, { req }) => value !== req.body.Password).withMessage('Passwords do not match.'),
  check('role')
    .optional()
    .isIn(['Resident', 'Waste Management Employee', 'Municipal Authority']).withMessage('Invalid role.')
];




export const signInValidator = [
  body('email')
    .isEmail().withMessage('Please provide a valid email.')
    .notEmpty().withMessage('Email is required.'),
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
    .notEmpty().withMessage('Password is required.')
];

export const testValidation = [
    body("serviceName","the name of the service is required").not().isEmpty()
   
];
export const addnewMessageValidation = [
    body("name", "name is required").not().isEmpty(),
    body("email", "email is required").not().isEmpty(),
    body("message", "message is required").not().isEmpty()
]

// route validation

export const createRouteValidation =[
  body('route_name').notEmpty().withMessage('Route name is required'),
    body('area_covered').notEmpty().withMessage('Area covered is required'),
    body('collection_days').isArray().withMessage('Collection days must be an array of strings'),
    body('vehicle_id').notEmpty().withMessage('Vehicle ID is required'),
    body('status').isIn(['Active', 'Inactive']).withMessage('Status must be either Active or Inactive')
]