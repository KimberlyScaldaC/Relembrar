import { Prisma } from "@prisma/client";
import UserService from "../service/UserService";
import {Request, Response} from 'express';

class UserController{
    constructor(){

    }

    async listUsers(req: Request, res: Response){
        const users = await UserService.listUsers() as Prisma.UserCreateInput[];

        const filteredUsers = users.filter((user: Prisma.UserCreateInput) => user.name != null)

        return res.status(200).json({
            status: 'ok',
            users: filteredUsers
        })
    }  
    
    async createUser(req: Request, res: Response){
        const dados: Prisma.UserCreateInput = req.body;
        if(dados){
            const newuser = UserService.createUser(dados);
            res.status(200).json({
                status: '20',
                newuser: newuser
            });
        }else{
            res.status(400).json({
                status: 'error',
                mensage: 'tem que colocar os dados'
            });
        }
        
    
        res.end('Incluir Usuarios');
    }

    async deleteUser(req: Request, res: Response){
        // serve para deletar  as informações
        res.send('Deleta Usuario');
    }

    async updateUser(req: Request, res: Response){
        // serve para atualizar as informações
        res.send('Atualizar Usuarios');
    }
}

export default new UserController;