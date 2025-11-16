import { funcionarios } from "../models/funcionarios.js"

const procurarfuncionarios = async (req,res) =>{
    const response = await funcionarios.find()
    res.json(response)
}

const procurarfuncionariosporid = async (req,res) =>{
        const {id} = req.params
        const response = await funcionarios.findById(id)
        res.json(response)
    }

const adicionafuncionarios =  (req,res) =>{
    const {nome, idade} = req.body
    if (!nome ||!idade){
        res.status(422).json({
            erro: true,
            message: "dados inválidos"
        })
        return
     }
    const funcionarios = new funcionarios({
        nome, idade 
    })
    funcionarios.save().then(
        () => res.status(201).json({
            erro: false,
            message: "funcionário verificado",
            funcionarios: funcionarios
    })).catch(err => {
        res.status(422).json({
            erro: true,
            message: "dados inválidos"
        })
    })
}

const modificafuncionarios = async (req,res) =>{
        const {id} = req.params
        const {nome, idade} = req.body
        const response = await funcionarios.findByIdAndUpdate(id,req.body)
        if (response){
            res.json({
                erro: false,
                message: "alteração concluída"
            })
        } else {
            res.json({
                erro: false,
                message: "alteração não realizada"
            })
        }
    }

export {procurarfuncionarios, adicionafuncionarios, procurarfuncionariosporid,modificafuncionarios}