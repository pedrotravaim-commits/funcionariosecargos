import { cargos } from "../models/cargos.js"

const procurarcargos = async (req,res) =>{
    const response = await cargos.find()
    res.json(response)
}

const adicionacargos =  async (req,res) => {
    const {descricao, hierarquia, cargo} = req.body
    if (!descricao, !hierarquia, !cargo){
        return res.status(422).json({
            erro: true,
            message: "dados inválidos"
        })
    }

    const cargos = new cargos({descricao, hierarquia, cargos})
    cargos.save().then(
        () => res.status(201).json({
            erro: false,
            message: "criado com sucesso"
        })
    ).catch(
        err => {
            return res.status(422).json({
            erro: true,
            message: "dados inválidos"
            })
        }
    )
}


const modificacargos = async (req,res) => {
    const {id} = req.params
    const {funcionarios} = req.body
    const cargos = await cargos.findByIdAndUpdate(id, {$addToset: {funcionarios}})
    if (cargos){
        return res.json({
            erro: false,
            message: "funcionário encontrado"
        })
    } else {
        res.json({
            erro: true,
            message: "funcionário não encontrado"
        })
    }
}   //Pesquisa funcionários específicos dentro de cargo



export{procurarcargos, adicionacargos, modificacargos}