import { Router} from 'express';
import HomeControlle from '../controllers/home/HomeControlle';



const routerHome = Router()

routerHome.get('/',HomeControlle.Home)


export default routerHome