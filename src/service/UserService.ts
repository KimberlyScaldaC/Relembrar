import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



//metodos para acessa o usuario
class UserService{

    constructor(){

    }

    async createUser(dados: Prisma.UserCreateInput){
        try{

            const newuser = await prisma.user.create({data: dados});
            return newuser;

        }catch(error){
            console.log(error);
        }

    }

    async updateUser(id: string, updateUser: Prisma.UserUpdateInput){
        try{

            const newuser = await prisma.user.update({
                where: {
                    id
                }, data: updateUser
                 
            })

            return newuser;

        }catch(error){
            console.log(error);
        }
    }

    async listUsers(id?: string): Promise<Prisma.UserCreateInput[] | Prisma.UserCreateInput | undefined | null>{
        try{
            // se nao axiste esse id
            if(!id){
                //return await prisma.user.findMany();
                //ou
                const users = await prisma.user.findMany();
                return users;
            }else{
                const user = await prisma.user.findUnique({
                    where: {
                        id
                    }
                })
                return user;
            }
        }catch(error){
            console.log(error);
            return null;
        }
        
    }

    async deleteUser(id: string){
        try{
            await prisma.user.delete({
                where: {
                   id
                }
            })   
        }catch(error){
            console.log(error);
        }
    }
}

export default new UserService();
//export default UserService;