import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

/*
appointmentsRouter.get('/', async (request, response) => {
  const appoitments = await appoitmentRepository.find();
  return response.json(appoitments);
});
*/

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
