
//Pedro Travaim - INFO 4B - PTAS

import express from "express"
import mongoose from "mongoose"
import { funcionariosRouter } from "./routes/funcionarios.js"
import { setorRouter } from "./routes/setor.js"
import { cargosRouter } from "./models/cargos.js"

const app = express()
app.use(express.json())

app.use("/funcionarios", funcionariosRouter)
app.use("/setor", setorRouter)
app.use("/cargos", cargosRouter)

app.get("", (req,res) => {
    res.end ("primeira pag")
})



mongoose.connect("mongodb://localhost:27017/bancodedados")
    .then (()=> console.log("mongodb conectado"))
    .catch((err)=> console.log("erro ao conectar"))


app.listen(3333, () => {
    console.log("servidor rodando na 3333")
})

