import express, {
  json
} from 'express';
import morgan from 'morgan';

// Importing routes
import exampleRoutes from './routes/examples';

// Initialization
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api/examples', exampleRoutes);

export default app;