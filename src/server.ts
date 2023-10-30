import express from "express";
import router from "./routes/index";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

export class App{
  public server: express.Application = express();

  constructor(){
    this.configs();
    this.server;
    this.middleware();
    this.router();
  }
  private configs(){

    dotenv.config({ 
      path: path.resolve(process.cwd(),'.env'),
      debug: true, 
      override: true 
    });
  }

  private middleware(){
    this.server.use(cors({
        origin: "*"
    }));
    this.server.use(express.json());
   
  }

  private router(){
    this.server.use(router);
  }
}