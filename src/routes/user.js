import { Router } from 'express';
import { userCreateSchema } from '../validators/user';
import * as userController from '../controllers/user';
import * as validate from '../middlerwares/validateSchema';

const router = Router();

router.get('/', userController.find);

router.post('/', validate.validateBodySchema(userCreateSchema), userController.create);

router.route('/:id').get(userController.findById).put(userController.update).delete(userController.deleteById);

export default router;
