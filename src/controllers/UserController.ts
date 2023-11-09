import { Prisma } from "@prisma/client";
import UserService from "../service/UserService";
import {Request, Response} from 'express';

class UserController{
    constructor(){

    }

    async listUsers(request: Request, response: Response){
        const users = await UserService.listUser() as Prisma.UserCreateInput[];

        const filteredUsers = users.filter((user: Prisma.UserCreateInput) => user.name != null)

        return response.status(200).json({
            status: 'ok',
            users: filteredUsers
        })
    }   
}