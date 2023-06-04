import express, { Request, Response, NextFunction } from 'express';
import PaymentRoutes from './routes/PaymentRoutes';
import logger from './logger/winston';
import config from './config';

const app = express();
const port = 5000;

app.use(express.json());

/* This is an extremely basic auth middleware, but it's better than nothing!
Our passwords should definitely not be stored in plain text in a config file... */
const auth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (authorization) {
    const encodedCredentials = authorization.split(' ')[1];
    const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString();
    const [username, password] = decodedCredentials.split(':');

    if (username === config.username && password === config.password) {
      next();
    } else {
      res.status(401).send('Authentication failed');
    }
  } else {
    res.status(401).send('Authorization header required');
  }
};

app.use(auth);
app.use('/api/payments', PaymentRoutes);

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
