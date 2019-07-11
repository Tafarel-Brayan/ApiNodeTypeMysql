import { Router } from 'express';

import IndexController from '../controllers/indexController';

const router = Router();

router.route('/').get(IndexController.get)

export default router;