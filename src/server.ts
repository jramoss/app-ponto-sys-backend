import express from "express";
import router from "./routes/index";
import cors from "cors";
import { encode } from "punycode";

export class App{
  public server: express.Application = express();

  constructor(){
    this.server;
    this.middleware();
    this.router();
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