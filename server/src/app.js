import express, {
  json
} from 'express';
import morgan from 'morgan';

// Importing routes
import Routes from './routes/index';
import newsRoutes from './routes/news';

// Initialization
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api', Routes);
app.use('/api/news', newsRoutes);

export default app;