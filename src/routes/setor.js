import { Router} from "express";
import { adicionasetor, procurarsetor } from "../controllers/setor.js";
const setorRouter = Router()


setorRouter.get("/setor", procurarsetor)

setorRouter.post("/setor", adicionasetor)

export{setorRouter}