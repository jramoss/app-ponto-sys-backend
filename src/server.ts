import express, { urlencoded } from "express";
import router from "./routes/index";
import cors from "cors";
import dotenv from 'dotenv'; 

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
      path: "../.env"
  }); 
    
  }

  private middleware(){
    this.server.use(cors({
        origin: "*"
    }));
    this.server.use(express.json());
    this.server.use(urlencoded({ extended: true }))

   
  }

  private router(){
    this.server.use(router);
  }
}