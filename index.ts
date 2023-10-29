import dotenv from "dotenv";
import express from "express";
import route from "./src/routes"
import cors from "cors";

dotenv.config()

const app = express()

app.use(cors({
  origin: "*"

}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route)

export default app