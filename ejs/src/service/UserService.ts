import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



//metodos para acessa o usuario
class UserService{

    constructor(){}

    async listUsers(id?: string){
        try{
            // se nao axiste esse id
           
                //return await prisma.user.findMany();
                //ou
                const users = await prisma.user.findMany();
                return users;
            
        }catch(error){
            console.log(error);
            return null;
        }
        
    }

 
}

export default new UserService();
//export default UserService;