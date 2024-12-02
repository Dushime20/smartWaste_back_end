import express from 'express';

import router from './Route/index.js';
import errorHandler from './Middleware/errorHandler.js';
import dotenv from 'dotenv';
import connectDB from "./libs/connectDb.js"

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';



import cors from "cors";
dotenv.config();
// const options = {
//   serverSelectionTimeoutMS: 30000, 
//   socketTimeoutMS: 45000, 
//   maxPoolSize: 10,
// };


connectDB()

const app = express();
app.use(cors());
app.use(express.json());

// Load Swagger documentation from the YAML file
const swaggerDocument = YAML.load( './Doc/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/SmartWaste', router);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

// Your routes and middleware setup
app.get('/', (req, res) => {
  res.send('Hello from Render!');
});
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


