import userRepository from "../repositories/userRepository";

class userService {
    private userrepository

   constructor(){
         this.userrepository = new userRepository()
   }

   async list (){
        const users = await this.userrepository.list()
        return users
   }
     
   async show (id:number){
        const user = await this.userrepository.show(Number(id))
        return user
   }

   async update (id:number,name:string,email:string){
      const user = await this.userrepository.update(Number(id),name,email)
      if (user) {
         return user
         
      } else {
         
         return {erro: "update errro"}
      }
   }

   async create (email:string,name:string){
        const user = await this.userrepository.create(email,name)
        if (user) {
           return  {
            erro: false,
            message: "sucesso ao cadastrar usuário",
            user
         }
        } 
        return {erro: true ,message: "Erro ao cadastrar usuário"}
   }

   async delete (id:Number){
     const userDel = await this.userrepository.delete(Number(id))
     if (userDel) {
         return userDel
     }
 
   }
}

export default userService