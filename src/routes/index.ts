import { Request, Response, Router, request, response } from 'express';
import routeUsers from './routeusers';

const route = Router()

route.get('/',(req:Request,res:Response)=>{
    return res.status(200).send(
        {
        status: res.status,
        msg: "ok"
        }
    )
})
route.use("/users",routeUsers)

export default route