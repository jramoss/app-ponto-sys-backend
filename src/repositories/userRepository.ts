import { PrismaClient, User } from "@prisma/client";
import { PrismaPromise } from "@prisma/client/runtime/library";

class userRepository {
    private prisma
    constructor(){
        this.prisma = new PrismaClient()
    }
    async list(): Promise<User[]> {
        const users = await this.prisma.user.findMany()
        return users;
    }

    async show(id:number): Promise<User | any > {
        const user = await this.prisma.user.findFirst({where: { id }})
        if(user){
            return user
        }
        return {Erro: "nenhum usuarios encontrado."}
    }
       
    async create(email:string , name:string){
        const user = await this.prisma.user.findFirst({where: {email}})
        if(user){
            return{ message: "Usuário ja existe" }
        }
        const createUser = await this.prisma.user.create({data: {email, name}})
        return createUser
    }

    async update(id:number,name:string, email:string): Promise<User| any > {
        const user = await this.prisma.user.findFirst({where: { id }})
        if (user) {
            const userUpdated = await this.prisma.user.update({
                where:{
                    id
                },
                data:{
                    name,
                    email
                }
            })
            if(userUpdated){
                return userUpdated
            }
        } else {
            return {erro: "Erro ao update user"}
        }
    }
    
    async delete(id:number): Promise<User| any > {
        const user = await this.prisma.user.findFirst({where: { id }})
        if (user) {
            const userUpdated = await this.prisma.user.delete({
                where:{
                    id
                }
            })
            if(userUpdated){
                console.log(userUpdated)
                return userUpdated
            }
        } else {
            return {erro: "Erro ao delete user"}
        }
        return 
    }
}

export default userRepository