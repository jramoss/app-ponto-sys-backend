import { Router} from 'express';
import  UserController  from '../controllers/user/UsersCeontrole';


const routeUsers = Router()
// lista 
routeUsers.get('/',UserController.index)
// show
routeUsers.get('/:id',UserController.show)
// update 
routeUsers.put('/:id',UserController.update)
// create
routeUsers.post('/',UserController.create)
// delete 
routeUsers.delete('/:id',UserController.delete)

export default routeUsers