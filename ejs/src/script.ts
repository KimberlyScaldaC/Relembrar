import { PrismaClient } from '@prisma/client'

import UserService from "./service/UserService"

const prisma = new PrismaClient();

//const userService = new UserService();
//nao precisa mas para la no codigo exportou o export default new UserService();


//função assincrona essa funcao serve para acessa o banco de dados
async function main() {

  console.log(await UserService.listUsers());

  //tenta deleta o usuario com o id 10
  // await prisma.user.delete({
  //   where: {
  //     id: '10'
  //   }
  // })

  //sempre vai ter o where
  // await prisma.user.update({
  //   where: {
  //     id: '10'
  //   },
  //   data: {
  //     email: "sla@gmail.com"
  //   }
  // })

  //criar um usuario
  // try{
  //     const newUser = await prisma.user.create({
  //         data: {
  //             name: "brian",
  //             email: "brian@gmail.com"
  //         }
  //     });
        
  //     console.log(newUser)
        
  // }catch(error){
  //     console.log(error)
  // }
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })