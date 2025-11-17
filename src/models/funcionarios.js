import { model, Schema } from "mongoose";

const funcionariosSchema = new Schema({
    nome: {type: String, required: true},
    idade: {type: Number, required: true},

})

const funcionarios = model('funcionarios',funcionariosSchema)
export {funcionarios}

