import { setor } from "../models/models/setor.js"

const procurarsetor = async (req,res) =>{
    const response = await setor.find()
    res.json(response)
}

const adicionasetor = (req,res) =>{
    const {areasetor} = req.body
    if (!areasetor){
        res.status(422).json({
            erro: true,
            message: "dados inválidos"
        })
        return
     }
    const setor = new setor({
        areasetor
    })
    setor.save().then(
        () => res.status(201).json({
            erro: false,
            message: "areasetor verificado",
            setor
    })).catch(err => {
        res.status(422).json({
            erro: true,
            message: "dados inválidos"
        })
    })
}

export{procurarsetor, adicionasetor}