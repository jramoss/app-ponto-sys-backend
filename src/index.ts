import { App } from "./server"
const PORT = process.env.PORT || 3333
const app = new App()


app.server.listen(PORT,()=>{
    console.log(`🔥 Server is runnig at http://localhost:${PORT}`)
});