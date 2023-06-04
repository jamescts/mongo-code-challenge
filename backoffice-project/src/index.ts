import express from 'express'
import TestRoutes from './routes/TestRoutes'
import { logger } from './logger/winston';

const app = express();
const port = 5000;

app.use('/api', TestRoutes);

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
  });

  app.listen(port, () => {
    logger.info(`[server]: Server is running at http://localhost:${port}`);
  });

  logger.info('Server has spun up!');