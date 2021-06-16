import { Router } from 'express';
import userRouter from './routes/user';
import authenticateRequest from './auth';

const publicRouter = Router();
const privateRouter = Router();

/**
 * Public routes
 *
 */
publicRouter.use('/users', userRouter);

/**
 * Private routes
 *
 */
privateRouter.use(authenticateRequest);

privateRouter.use('/', (req, res) => {
  res.send({ message: 'This is private route' });
});

export { publicRouter, privateRouter };
