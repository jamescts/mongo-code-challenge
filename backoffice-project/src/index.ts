import express from 'express';
import PaymentRoutes from './routes/PaymentRoutes';
import logger from './logger/winston';

const app = express();
const port = 5000;

app.use(express.json());
app.use('/api/payments', PaymentRoutes);

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});

logger.info('Server has spun up!');
