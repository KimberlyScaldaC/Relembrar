//é um servidor web
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import express from 'express';
import path from 'path';
import UserService from './service/UserService';

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, function(){
    console.log('Serve working on port -> ' + port);
})

//toda a requisicao que receber na raiz vai responder
app.get("/", async function(req, res){ //get pegar as coisas no servido

    // const users = await UserService.listUsers();
    // return res.json(users);
    
    res.sendFile(path.join(__dirname) + '/src/views/index.html');


    return res.send("Tudo ok ...");

})



app.post("/", async function(req, res){ // inserir as informações
    res.send("Uma requisição POST");

    const user = req.body;
    
    const newUser = await prisma.user.create({
        data:user
    })
    
    console.log(newUser);

    res.send("Usuario criado com sucesso");
})



app.put("/", function(req, res){ // serve para atualizar as informações
    res.send("Uma requisição PUT");
})

app.delete("/", function(req, res){ // serve para deletar  as informações
    res.send("Uma requisição DELETE");
})


app.listen(3000, function(){
    console.log("Servidor funcionando normalmente...");
})