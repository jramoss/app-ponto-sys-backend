import { PrismaClient } from "@prisma/client";
import { App } from "./server"


const app = new App()

const PORT = process.env.PORT || 3333
const db = new PrismaClient()

try {
    app.server.listen(PORT,()=>{
        console.log(`🚀 🚀  Server is runnig at http://localhost:${PORT}`)
    });
} catch (error) {
    console.log(` Server is no runnig erro ${error}`)
}

