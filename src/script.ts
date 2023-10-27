import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//função assincrona
async function main() {
    try{
        const newUser = await prisma.user.create({
            data: {
                name: "kimberly",
                email: "kimberly@gmail.com"
            }
        });
        
        console.log(newUser)
        
    }catch(error){
        console.log(error)
    }
  
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