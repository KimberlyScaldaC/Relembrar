import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

//get pegar as coisas no servido
UserRouter.get("/users", UserController.listUsers);
 
UserRouter.post("/user", UserController.createUser);

UserRouter.put("/user", UserController.updateUser);

UserRouter.delete("/user", UserController.deleteUser);

export default UserRouter;