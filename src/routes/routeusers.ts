import { Router} from 'express';
import  UserController  from '../controllers/user/UsersCeontrole';


const routeUsers = Router()

routeUsers.get('/',UserController.index)
routeUsers.get('/:id',UserController.show)

export default routeUsers