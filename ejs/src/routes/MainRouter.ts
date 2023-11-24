import { Router } from "express";

import MainController from "../controllers/MainController";

const MainRouter = Router();

//get pegar as coisas no servido
MainRouter.get("/", MainController.renderMain);
 


export default MainRouter;