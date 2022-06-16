import { Router } from 'express';
import userRouter from './routes/user';
import authenticateRequest from './auth';

const publicRouter = Router();
/**
 * Public routes
 *
 */
publicRouter.get('/info', (req, res) => {
  res.send({ message: 'This is public route' });
});

publicRouter.use('/users', userRouter);

/**
 * Private routes
 *
 */
const privateRouter = Router();

privateRouter.use(authenticateRequest);

export { publicRouter, privateRouter };
