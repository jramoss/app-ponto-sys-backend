import { Request , Response } from "express"

class HomeController{

    Home (req:Request,res: Response) {
        return res.send({Home: "Pagina Home"})
    }
}

export default new HomeController()