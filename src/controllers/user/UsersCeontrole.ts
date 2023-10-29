import { Request, Response } from "express"

class UserController {

    index (req:Request,res: Response) {
        return res.send({user: "jonas"})
    }
   
    show = (req:Request,res: Response)=> {
        const id = req.params.id
        return res.send({
            id: id,
            user: "jonas"
        })
    }
    
    update = (req:Request,res: Response)=> {
        const id = req.params.id
        return res.send({
            id: id,
            user: "jonas"
        })
    }
    
    create = (req:Request,res: Response)=> {
        const id = req.params.id
        return res.send({
            id: id,
            user: "jonas"
        })
    }

    delete = (req:Request,res: Response)=> {
        const id = req.params.id
        return res.send({
            id: id,
            user: "jonas"
        })
    }
}

export default new UserController()