import { Prisma } from "@prisma/client";
import UserService from "../service/UserService";
import {Request, Response} from 'express';

class MainController{

    constructor(){}

    renderMain(req: Request, res: Response){
        res.render('home');
    }  
    
    
}

export default new MainController();