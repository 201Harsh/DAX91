import { Router } from 'express';

const UserRouter = Router();

UserRouter.route('/register').post((req, res) => {
    res.send('POST request');
});

export default UserRouter;