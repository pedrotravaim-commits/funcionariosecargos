import { Router} from "express";
import { adicionacargos, modificacargos, procurarcargos } from "../controllers/cargos.js";
const cargosRouter = Router()

cargosRouter.get("/cargos", procurarcargos)

cargosRouter.post("/cargos", adicionacargos)

cargosRouter.put("/cargos/:id/funcionarios", modificacargos )  


export {cargosRouter}