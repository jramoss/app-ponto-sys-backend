import { Request , Response } from "express"

class HomeController{

    Home (req:Request,res: Response) {
        return res.send({
            App: "ponto sys api",
            Version: "1.0.1"
        })
    }
}

export default new HomeController()