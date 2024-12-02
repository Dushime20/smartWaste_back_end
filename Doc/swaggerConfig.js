import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

// Get __dirname equivalent
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

// Load Swagger documentation from the YAML file
const swaggerDocument = YAML.load( './Doc/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
