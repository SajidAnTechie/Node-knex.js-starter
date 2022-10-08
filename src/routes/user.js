import { Router } from 'express';
import * as userController from '../controllers/user';
import * as validate from '../middlerwares/validateSchema';
import { userCreateSchema, userQueryParamsSchema } from '../validators/user';

const router = Router();

router.get('/', validate.validateQuerySchema(userQueryParamsSchema), userController.find);

router.post('/', validate.validateBodySchema(userCreateSchema), userController.create);

router.route('/:id').get(userController.findById).put(userController.update).delete(userController.deleteById);

export default router;
