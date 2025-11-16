import { model, Schema } from "mongoose";

const setorSchema = new Schema({
    areasetor: {type: String, required: true},
    
})

const setor = model('setor',setorSchema)
export {setor}

// setor = mesas