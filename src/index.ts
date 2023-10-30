import { App } from "./server"
const PORT = process.env.PORT || 3000
const app = new App()


app.server.listen(PORT,()=>{
    console.log(`server is runnig at http://localhost:${PORT}`)
});