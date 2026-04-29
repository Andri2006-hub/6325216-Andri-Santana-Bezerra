import { Router } from 'express';
import ListUserController from '../../app/Controllers/User/ListUserController.js';
import GetUserController from '../../app/Controllers/User/GetUserController.js';
import CreateUserController from '../../app/Controllers/User/CreateUserController.js';
import UpdateUserController from '../../app/Controllers/User/UpdateUserController.js';
import DeleteUserController from '../../app/Controllers/User/DeleteUserController.js';

export default (() => {
    const router = Router();

    router.get('/', ListUserController);

    router.get('/:id', GetUserController);

    router.post('/', CreateUserController);

    router.put('/:id', UpdateUserController);

    router.delete('/:id', DeleteUserController);

    return router;
})();