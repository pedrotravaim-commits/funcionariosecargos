import { model, Schema } from "mongoose";

const cargosSchema = new Schema({
    descricao: {type: String, required: true},
    hierarquia:{type: Schema.Types.ObjectId, ref:'setor', required: true},
    //unica
    cargos: [{type: Schema.Types.ObjectId, ref: 'cargos'}]
    //array
})

const cargos = model('cargos', cargosSchema)
export {cargos}

//cargo = comanda