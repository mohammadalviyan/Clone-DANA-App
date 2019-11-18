import express, {
  json
} from 'express';
import morgan from 'morgan';

// Importing routes
import Routes from './routes/index';

// Initialization
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api', Routes);

export default app;