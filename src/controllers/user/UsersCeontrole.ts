import { Request, Response } from "express"
import userService from "../../services/userService"

class UserController {
    private userService  
    
    constructor(){
        this.userservice = new userService()
    } 

    index = async(req:Request,res: Response)=> {
        const AllUsers = new userService
        const users = await AllUsers.list()
        if (users) {
            return res.json(users)
        } else {
            res.sendStatus(400).send("erro")
        }
    }
   
    show = async (req:Request,res: Response) => {
        const { id } = req.params
        const user = await this.userservice.show(id)
       return res.json(user);
       
    }
    
    create = async (req:Request,res: Response)=> {
        const {email,name} = req.body
        const user = await this.userservice.create(email,name)
       
        if (user) {
            return res.json(user)
        } else {
            res.status(400).json(user)
        }
    }

    update = async (req:Request,res: Response)=> {
        const { id } = req.params
        const { name , email } = req.body
        const user = await this.userservice.update(id,name,email)

        return res.json(user);
    }

    delete = async(req:Request,res: Response)=> {
       const { id } = req.params
       const user = await this.userservice.delete(id)
       
       return res.json(user);
    }
}

export default new UserController()