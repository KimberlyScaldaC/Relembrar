import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

//get pegar as coisas no servido
UserRouter.get("/users", UserController.listUsers);
 


export default UserRouter;