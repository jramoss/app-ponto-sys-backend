import Router from 'express';
import routeUsers from './routeusers';
import routerHome from './home';

const router = Router()

router.use("/",routerHome)
router.use("/users",routeUsers)


export default router