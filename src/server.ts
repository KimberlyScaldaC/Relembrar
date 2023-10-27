//é um servidor web
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import express from 'express';

const app = express();

//toda a requisicao que receber na raiz vai responder
app.get("/", function(req, res){ //get pegar as coisas no servido
    res.send("Tudo ok ...")

})

app.post("/", async function(req, res){ // inserir as informações
    res.send("Uma requisição POST")

    const user = req.body;
    
    const newUser = await prisma.user.create({
        data:user
    })
    
    console.log(newUser)

    res.send("Usuario criado com sucesso")
})

app.put("/", function(req, res){ // serve para atualizar as informações
    res.send("Uma requisição PUT")
})

app.delete("/", function(req, res){ // serve para deletar  as informações
    res.send("Uma requisição DELETE")
})


app.listen(3000, function(){
    console.log("Servidor funcionando normalmente...");
})