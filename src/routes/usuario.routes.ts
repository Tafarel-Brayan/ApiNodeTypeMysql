import { Router } from 'express';
import usuarioController from '../controllers/usuarioController';


const router = Router();

router.route('/')
    .get(usuarioController.get)
    .post(usuarioController.create);

router.route('/:id').get(usuarioController.getById);

export default router;