import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'This is public route' });
});

export default router;
