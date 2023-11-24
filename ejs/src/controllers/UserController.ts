import { Prisma } from "@prisma/client";
import UserService from "../service/UserService";
import {Request, Response} from 'express';

class UserController{

    constructor(){}

    async listUsers(req: Request, res: Response){
        const users = await UserService.listUsers() as Prisma.UserCreateInput[];

        //res.sendFile('users', {users: users }); //coloca o caminha ate a pasta  ejs

        const filteredUsers = users.filter((user: Prisma.UserCreateInput) => user.name != null)

        return res.status(200).json({
            status: 'ok',
            users: filteredUsers
        })
    }  
    
   
}

export default new UserController();