import express, {
  json
} from 'express';
import morgan from 'morgan';

// Importing routes
import exampleRoutes from './routes/examples';
import newsRoutes from './routes/news';

// Initialization
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api/examples', exampleRoutes);
app.use('/api/news', newsRoutes);

export default app;