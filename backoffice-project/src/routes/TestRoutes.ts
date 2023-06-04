import express from 'express';
import TestController from '../controllers/TestController';

const router = express.Router();

router.get('/test', TestController.doSomething);

export default router;