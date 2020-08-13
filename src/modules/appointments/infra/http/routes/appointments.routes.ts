import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmetsController from '../controllers/ProviderAppointmetsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmetsController = new ProviderAppointmetsController();

appointmentsRouter.use(ensureAuthenticated);

/*
appointmentsRouter.get('/', async (request, response) => {
  const appoitments = await appoitmentRepository.find();
  return response.json(appoitments);
});
*/

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/me', providerAppointmetsController.index);

export default appointmentsRouter;
