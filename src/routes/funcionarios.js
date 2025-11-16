import { Router} from "express";
import { adicionafuncionarios, modificafuncionarios, procurarfuncionarios, procurarfuncionariosporid } from "../controllers/funcionarios.js";
const funcionariosRouter = Router()

funcionariosRouter.get("/funcionarios", procurarfuncionarios )

funcionariosRouter.post("/funcionarios", adicionafuncionarios)

funcionariosRouter.get("/funcionarios/:id", procurarfuncionariosporid)

funcionariosRouter.put("/funcionarios/:id", modificafuncionarios)
    //pesquisa funcionarios pelo id

    export {funcionariosRouter}